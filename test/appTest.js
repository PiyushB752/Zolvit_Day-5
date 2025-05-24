import {assert} from "chai"
import app from "../app.js"

const sayHelloResult = app.sayHello()
const addNumbersResult = app.addNumbers(5,5)
const trueOrFalseResult = app.trueOrFalse()

describe("App",function(){
    describe("SayHello",function(){
        it("sayHello should return hello",function(){
            assert.equal(sayHelloResult,"hello")
        })
        
        it("sayHello should return type string",function(){
            assert.typeOf(sayHelloResult,"string")
        })
    })

    describe("AddNumbers",function(){
        it("addNumbers should be above 5",function(){
            assert.isAbove(addNumbersResult,5)
        })
        
        it("addNumbers should return numbers",function(){
            assert.typeOf(addNumbersResult,"number")
        })
    })

    describe("TrueOrFalse",function(){
        it("trueOrFalse should return True",function(){
            assert.isTrue(trueOrFalseResult)
        })

        it("trueOrFalse should not return False",function(){
            assert.isNotFalse(trueOrFalseResult)
        })
    })
})