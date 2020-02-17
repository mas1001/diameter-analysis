
/**
 * @OnlyCurrentDoc
 */

function Cellclear() {

  var ss = SpreadsheetApp.getActiveSheet(); 
  var range1 = ss.getRange("L3:L107").getValues();
  
  for (i = 3; i <= 107; ++i){
      var range6 = ss.getRange("N" + i).setValue(range1[i - 3][0]);
  }

  var range2 = ss.getRange("B3:B117").clearContent();
  var range3 = ss.getRange("D3:H117").clearContent();
}

function Dialog(){
  var yourSelections = Browser.msgBox("削除しますか?バックアップは取りましたか?", Browser.Buttons.OK_CANCEL);
  if (yourSelections == 'ok'){
    Cellclear();
    Browser.msgBox('実行しました');
  }

  else{
    Browser.msgBox('きをつけてね');
  }
}