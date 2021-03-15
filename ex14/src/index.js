function main(){
    var myNoun = "dog";
    var myVerb ="ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "My " + myAdjective + ", ugly " + myNoun + " never " + myVerb + ".";
    return wordBlanks;
}
console.log(main());
module.exports = main;