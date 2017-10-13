// JavaScript Document
// Author: Eric Perez
// Pattern #1: Vowels And Consonants Excercise

/*
Task:
First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, 
and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as 
it appeared in .
*/

'use strict';

function vowelsAndConsonants(s) {
    
    let array = s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let constonents = [];

    for ( var i = 0; i < array.length; i++ ) {

        if ( vowels.indexOf( array[i]  ) !== -1 ) {
            console.log(array[i]);
        } else {
            constonents.push(array[i]);
        }
    }

    for (var i= 0; i < constonents.length ; i++) {
        console.log( constonents[i] );
    }
    
    
}


vowelsAndConsonants("javascriptloops");