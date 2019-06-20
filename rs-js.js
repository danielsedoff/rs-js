/* This is my RS.C project translated into JavaScript.   */
/* Author contact: Daniel Sedoff, danielsedoff@gmail.com */ 

function main(){
 var c, cc, tx, min_word, txLen, ctr, currChar, copyCh, wrd, longestWd, progressPc;
 var buffer = "";
 
 min_word = document.getElementById("minlength").value;
 min_word = Math.floor(min_word);
 if(min_word == isNaN || min_word == 0) min_word = 1; // default
 
 tx = document.getElementById("inputText").value;
 if(tx == "") {
    buffer += "" +  ("\nSorry, no input data.\n");
  help();
  return 0;
 }
 
 txLen = strlen(tx);
 buffer += "" +  ("\nInput length in bytes: ", txLen, "\n");
 buffer += "" +  ("If it takes too long, try to change the MINLENGTH parameter.\n");
 
 
 if(txLen < 2) return 0;
 
 for(currChar = 0; currChar < txLen - 1; ++currChar) {
  progressPc = 100 * currChar / txLen;
  c = tx[currChar];
  longestWd = 0;
  for(copyCh = currChar + 1; copyCh < txLen; ++copyCh) {
   if(c == tx[copyCh]){
    wrd = 1;
    while(currChar + wrd < copyCh && copyCh + wrd < txLen && tx[currChar+wrd]==tx[copyCh+wrd]){
     ++wrd;
    }
    if (wrd > longestWd) longestWd = wrd;
   }
  }
  if(longestWd > 1){
   if(longestWd >= min_word) {
    buffer += "\n" +  (progressPc.toPrecision(4));
    if (currChar == 0) {
		ctr = 0; 
		--longestWd;
	} else {
		ctr = currChar - 1;
	}
    for(; ctr < currChar + longestWd && ctr < txLen; ++ctr) {
	 cc = tx[ctr];
	 if(cc == '\n' || cc == '\t') cc = ' ';
	 buffer += "" +  (cc);
    }
   }
   currChar += longestWd;
  }
 }
 printf(buffer);
 return 0;
}

function help(){
  printf (
    ("\nrs: find repeated strings in text \n") +
    ("USAGE: paste the text in the textbox, enter MINLENGTH and press GO.\n\n") +
    ("[MINLENGTH] is the minimum repeated sequence length.\n") +
    ("Author contact: Daniel Sedoff, danielsedoff@gmail.com\n\n")
  );
}

function printf(){
    var argc = arguments.length;
    var argv = "";
    for(var i = 0; i < argc; ++i){
        argv = arguments[i];
        if (typeof argv != "undefined") {
            document.body.innerHTML += argv.toString().replace(/\n/g,"<br>");    
        }
    }
}

function strlen(string) { 
    return string.length; 
}