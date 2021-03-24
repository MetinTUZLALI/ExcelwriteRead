const reader = require('xlsx')

const data = require('./data')

const file = reader.readFile("./OrnekDosya.xlxs");

const y = reader.utils.json_to_sheet(data);

reader.utils.book_append_sheet(file,y,"Sheet3")

reader.writeFile(file,"./OrnekDosya.xlxs");