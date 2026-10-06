import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const base=process.argv[2];
const walk=d=>readdirSync(d).flatMap(f=>{const p=join(d,f);return statSync(p).isDirectory()?walk(p):[p]});
for(const f of walk('dist').filter(f=>f.endsWith('.html'))){let s=readFileSync(f,'utf8');s=s.replace(/(href|src)="(\/[^"]*)"/g,(m,a,url)=>url.startsWith(base+'/')||url.startsWith('//')?m:`${a}="${base}${url}"`);writeFileSync(f,s)}
