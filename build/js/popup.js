$(function() {

  /*
  For popup.html
   */
  chrome.storage.sync.get("aw2x_noise", function(item) {
    return $("input[type=radio][name=noise][value=" + item.aw2x_noise + "]").attr("checked", true);
  });
  chrome.storage.sync.get("aw2x_scale", function(item) {
    return $("input[type=radio][name=scale][value=" + item.aw2x_scale + "]").attr("checked", true);
  });
  chrome.storage.sync.get("aw2x_is_allowed_download_original_size", function(item) {
    return $(".allowable-download-original-size").prop("checked", item.aw2x_is_allowed_download_original_size);
  });
  $("input[type=radio][name=noise]").on("change", function() {
    var item, noise;
    noise = $("input[type=radio][name=noise]:checked").val();
    item = {
      'aw2x_noise': noise
    };
    return chrome.storage.sync.set(item, function() {
      return console.log('changed noise!!');
    });
  });
  $("input[type=radio][name=scale]").on("change", function() {
    var item, scale;
    scale = $("input[type=radio][name=scale]:checked").val();
    item = {
      'aw2x_scale': scale
    };
    return chrome.storage.sync.set(item, function() {
      return console.log('changed scale!!');
    });
  });
  return $(".allowable-download-original-size").on("change", function() {
    var isAllowedDownloadOriginalSize, item;
    isAllowedDownloadOriginalSize = $(".allowable-download-original-size").prop('checked');
    item = {
      'aw2x_is_allowed_download_original_size': isAllowedDownloadOriginalSize
    };
    return chrome.storage.sync.set(item, function() {
      return console.log('changed isAllowedDownloadOriginalSize!!');
    });
  });
});
