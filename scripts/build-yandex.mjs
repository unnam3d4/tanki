import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const DIST=path.join(ROOT,'dist');
const LIMIT=100*1024*1024;
const INCLUDE=['index.html','src','assets'];
const CYR=/[\u0400-\u04FF]/;

function rm(p){if(fs.existsSync(p))fs.rmSync(p,{recursive:true,force:true})}
function copy(src,dst){
  if(!fs.existsSync(src))return;
  const st=fs.statSync(src);
  if(st.isDirectory()){
    fs.mkdirSync(dst,{recursive:true});
    for(const name of fs.readdirSync(src))copy(path.join(src,name),path.join(dst,name));
  }else{
    fs.mkdirSync(path.dirname(dst),{recursive:true});
    fs.copyFileSync(src,dst);
  }
}
function walk(dir,out=[]){
  for(const name of fs.readdirSync(dir)){
    const p=path.join(dir,name),st=fs.statSync(p);
    if(st.isDirectory())walk(p,out);else out.push(p);
  }
  return out;
}

rm(DIST);fs.mkdirSync(DIST,{recursive:true});
for(const item of INCLUDE)copy(path.join(ROOT,item),path.join(DIST,item));

const platformPath=path.join(DIST,'src','platform.js');
if(fs.existsSync(platformPath)){
  let code=fs.readFileSync(platformPath,'utf8');
  code=code.replace(/const sdkUrl=\(\)=>\{[^;]+;return[^}]+\};/, "const sdkUrl=()=>'/sdk.js';");
  fs.writeFileSync(platformPath,code);
}

const files=walk(DIST);
let total=0;
for(const file of files){
  const rel=path.relative(DIST,file).split(path.sep);
  for(const part of rel){
    if(part.includes(' ')||CYR.test(part))throw new Error('Invalid Yandex filename: '+rel.join('/'));
  }
  total+=fs.statSync(file).size;
}
if(!fs.existsSync(path.join(DIST,'index.html')))throw new Error('index.html must be in dist root');
if(total>LIMIT)throw new Error('Uncompressed build exceeds 100 MB: '+total+' bytes');

fs.writeFileSync(path.join(DIST,'BUILD_INFO.txt'),
  'Tanki: Zashiti Bazu!\nYandex Games release build\nFiles: '+files.length+'\nUncompressed bytes: '+total+'\n'
);
console.log('Yandex build ready:',DIST);
console.log('Uncompressed size:',(total/1024/1024).toFixed(2),'MB');
