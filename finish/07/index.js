var buff = Buffer.from("W tym zdaniu są jakieś polskie znaki.", "utf8");

console.log(buff.toString());

buff.write("Lorem ipsum");

console.log(buff.toString());