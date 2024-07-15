import { characters } from '../../src/js-foundation/02-destructuring';


describe('js-foundation/02-destructuring', () => { 
    test('characters should contains Flash, Superman', () => { 

        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
        
     });

     test('first character should be flash and second', () => { 
        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
    
      })
 })

