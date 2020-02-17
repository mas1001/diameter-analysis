/**
 * @OnlyCurrentDoc
 */

function insertLastUpdated() {

  var ss = SpreadsheetApp.getActiveSheet(); 
  var currentRow = ss.getActiveCell().getRow(); 
  var currentColumn = ss.getActiveCell().getColumn(); 
  var currentCell = ss.getActiveCell().getValue(); 
  var updateRange = ss.getRange('F' + currentRow) //更新日をいれる列をstringで指定。この場合はF列
  var date = new Date()
  
  date.setTime(date.getTime() + 1000*60*60*17);// JSTに変換
  Logger.log(updateRange);
  
  //更新日の記入
  if(currentRow>2){ 
    if(currentColumn == 2) { 
      updateRange.setValue(date);
    }
  }
}