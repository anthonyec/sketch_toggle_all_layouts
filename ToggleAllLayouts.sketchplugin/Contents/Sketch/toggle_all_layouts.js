function toggleAllLayouts(context) {
  var artboards = context.document.currentPage().artboards();
  var currentArtboard = context.document.currentPage().currentArtboard();

  var isEnabled = !currentArtboard.layout().isEnabled();

  for (var i = 0; i < artboards.count(); i++) {
    var artboard = artboards.objectAtIndex(i);

    if (artboard.layout()) {
      artboard.layout().setIsEnabled(isEnabled);
    }
  }
};
