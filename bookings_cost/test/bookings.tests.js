describe('Test for my bookingCost function' , function(){
    it("it should return 'R135' if the function is called with 'R45 * 3' " , function(){
        assert.equal(135,bookingCost({
            check_in_day: 'Monday',
            duration: 3,
            cat_name : 'Snowy'
          }));

    });

    it("it should return 'R114.75' if the function is called with 'R45 * 3 * 0.85 ' " , function(){
        assert.equal(114.75,bookingCost({
            check_in_day: 'Friday',
            duration: 3,
            cat_name : 'Snowy'
          }));

    });

    it("it should return 'R101.25' if the function is called with 'R45 * 3 * 0.75' " , function(){
        assert.equal(101.25,bookingCost({
            check_in_day: 'Wednesday',
            duration: 3,
            cat_name : 'Snowy'
          }));

    });
    

});


    
