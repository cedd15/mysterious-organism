//DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). 

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

//array of DNAs
const strand1 = mockUpStrand();
//console.log(strand1);

//function to create multiple objects
function pAequorFactory(num, arrayDNA) {
    return {
        //a number to assign to an organism
        specimenNum: num, 
        //assigns the array of DNAs to dna property
        dna: arrayDNA,
        //a method that changes a DNA base to a new random base
        mutate() {
            //select a random element from the array
            const randomBase = Math.floor(Math.random() * 15);
            //assign a new random value to that element
            this.dna[randomBase] = returnRandBase();
            //returns the mutated array
            return this.dna;
        },
    }
}

const Aequor1 = pAequorFactory(1, strand1);
console.log(Aequor1.mutate());