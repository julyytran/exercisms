var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var complements = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U'
  }

  var input = dna.split('')
  var rna = "";

  for (var i = 0; i < input.length; i++) {
    rna = rna + complements[input[i]]
  }

  return rna
}

module.exports = DnaTranscriber;
