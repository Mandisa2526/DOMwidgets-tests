describe('this test' , function(){
    it('should be able to set the call cost' , function(){
        let settingsBill = BillWithSettings();
        settingsBill.getCallCost(1.85);
        
        assert.equal(1.85, settingsBill.getCallCost());
    });

});