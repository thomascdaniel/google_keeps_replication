(function() {
  var makeNote;

  makeNote = function() {
    var height;
    height = parseInt(100 + Math.random() * 500, 10);
    return '<div class="note"><div class="note-inner" style="height: ' + height + 'px"></div></div>';
  };

  $(function() {
    var $note, $notes, i, x;
    $notes = $(".notes");
    for (x = i = 0; i <= 10; x = ++i) {
      $note = $(makeNote());
      $notes.append($note);
    }
    return $('.notes').isotope({
      itemSelector: '.note',
      layoutMode: 'masonry'
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFFBQUEsR0FBVyxRQUFBLENBQUEsQ0FBQTtBQUNULFFBQUE7SUFBQSxNQUFBLEdBQVMsUUFBQSxDQUFTLEdBQUEsR0FBSSxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBYyxHQUEzQixFQUFnQyxFQUFoQztXQUNULDJEQUFBLEdBQTRELE1BQTVELEdBQW1FO0VBRjFEOztFQUlYLENBQUEsQ0FBRSxRQUFBLENBQUEsQ0FBQTtBQUNBLFFBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLFFBQUY7SUFDVCxLQUFTLDJCQUFUO01BQ0UsS0FBQSxHQUFRLENBQUEsQ0FBRSxRQUFBLENBQUEsQ0FBRjtNQUNSLE1BQU0sQ0FBQyxNQUFQLENBQWMsS0FBZDtJQUZGO1dBSUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLE9BQVosQ0FDRTtNQUFBLFlBQUEsRUFBYyxPQUFkO01BQ0EsVUFBQSxFQUFZO0lBRFosQ0FERjtFQU5BLENBQUY7QUFKQSIsInNvdXJjZXNDb250ZW50IjpbIm1ha2VOb3RlID0gLT5cbiAgaGVpZ2h0ID0gcGFyc2VJbnQgMTAwK01hdGgucmFuZG9tKCkqNTAwLCAxMFxuICAnPGRpdiBjbGFzcz1cIm5vdGVcIj48ZGl2IGNsYXNzPVwibm90ZS1pbm5lclwiIHN0eWxlPVwiaGVpZ2h0OiAnK2hlaWdodCsncHhcIj48L2Rpdj48L2Rpdj4nXG4gIFxuJCAtPlxuICAkbm90ZXMgPSAkIFwiLm5vdGVzXCJcbiAgZm9yIHggaW4gWzAuLjEwXVxuICAgICRub3RlID0gJCBtYWtlTm90ZSgpXG4gICAgJG5vdGVzLmFwcGVuZCAkbm90ZVxuICAgIFxuICAkKCcubm90ZXMnKS5pc290b3BlXG4gICAgaXRlbVNlbGVjdG9yOiAnLm5vdGUnLFxuICAgIGxheW91dE1vZGU6ICdtYXNvbnJ5JyJdfQ==
//# sourceURL=coffeescript