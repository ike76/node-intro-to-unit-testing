const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js')

describe('fizzBuzzer', () => {
	it('should return fizz-buzz if input is divisible by 5 and 3', ()=>{
		[15,30,45,5460].forEach(num=>{
			expect(fizzBuzzer(num)).to.equal('fizz-buzz')
		})
	})

	it('should return number if not divisible by 3 5 or 15', ()=>{
		[16,22,31].forEach(num=>{
			expect(fizzBuzzer(num)).to.equal(num);
		})
	})

	it('should return buzz if divisible by 5 but not 15', ()=>{
		[10,20,35].forEach(num=>{
			expect(fizzBuzzer(num)).to.equal('buzz')
		})
	})

	it('should return fizz if input divisible by 3 only', () => {
		[3,6,33].forEach(num=>{
			expect(fizzBuzzer(num)).to.equal('fizz')
		})
	})
	it('should throw error if input is not a number', ()=>{
		[true, 'hi', [1,2,3]].forEach(input=>{
			expect(()=>{fizzBuzzer(input)}).to.throw(Error)
		})
	})
	
})