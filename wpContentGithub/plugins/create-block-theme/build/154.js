"use strict";(self.webpackChunkcreate_block_theme=self.webpackChunkcreate_block_theme||[]).push([[154],{9154:(e,i,t)=>{t.r(i),t.d(i,{post:()=>r});var s=t(2592);class r extends s.x{constructor(e,i){const{p:t}=super(e,i);if(this.version=t.legacyFixed,this.italicAngle=t.fixed,this.underlinePosition=t.fword,this.underlineThickness=t.fword,this.isFixedPitch=t.uint32,this.minMemType42=t.uint32,this.maxMemType42=t.uint32,this.minMemType1=t.uint32,this.maxMemType1=t.uint32,1===this.version||3===this.version)return t.verifyLength();if(this.numGlyphs=t.uint16,2===this.version){this.glyphNameIndex=[...new Array(this.numGlyphs)].map((e=>t.uint16)),this.namesOffset=t.currentPosition,this.glyphNameOffsets=[1];for(let e=0;e<this.numGlyphs;e++){if(this.glyphNameIndex[e]<a.length){this.glyphNameOffsets.push(this.glyphNameOffsets[e]);continue}let i=t.int8;t.skip(i),this.glyphNameOffsets.push(this.glyphNameOffsets[e]+i+1)}}2.5===this.version&&(this.offset=[...new Array(this.numGlyphs)].map((e=>t.int8)))}getGlyphName(e){if(2!==this.version)return console.warn(`post table version ${this.version} does not support glyph name lookups`),"";let i=this.glyphNameIndex[e];if(i<258)return a[i];let t=this.glyphNameOffsets[e],s=this.glyphNameOffsets[e+1]-t-1;return 0===s?".notdef.":(this.parser.currentPosition=this.namesOffset+t,this.parser.readBytes(s,this.namesOffset+t,8,!0).map((e=>String.fromCharCode(e))).join(""))}}const a=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"]}}]);