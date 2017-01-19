describe("PBSpinwheel's core tests", function() {
    
    it("should have global text's value equal to 'test'", function() {
        expect(PBSpinwheel.globalText).toEqual("Test");
    });

    it("should return 'Hello World' from returnHelloWorld function", function() {
        expect(PBSpinwheel.util.returnHelloWorld()).toEqual("Hello World");
    });

    it("should have 'Dynamic Text' as value of dynamicText property", function() {
        expect(PBSpinwheel.dynamicText).toEqual("Dynamic Text");
    });
});
