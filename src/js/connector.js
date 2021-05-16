var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function(t, options){
  return t.popup({
    title:"Nouvelle intervention",
    url:'./html/popupNewInter.html',
    height: 250
  });

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: '+ inter',
      callback: onBtnClick

    }, {
      // but of course, you could also just kick off to a url if that's your thing
      icon: GRAY_ICON,
      text: 'Interventions',
      callback: function(t, options){
        return t.popup({
          title:"List des intervention Intervention",
          url:'./html/popupListInter.html',
          height: 250
        });
      }


    }];
  }
});
