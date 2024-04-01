let person_name: string="Umer";
console.log("lower case", person_name.toLocaleLowerCase());
console.log("Upper case", person_name.toLocaleUpperCase());
console.log("title case", person_name.replace(/\bw/g,c => c.toUpperCase()));
