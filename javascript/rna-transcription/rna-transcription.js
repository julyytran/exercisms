var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var complements = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U'
  }

  var rna = "";

  for (var i = 0; i < dna.length; i++) {
    rna = rna + complements[dna[i]]
  }

  return rna
}

module.exports = DnaTranscriber;
