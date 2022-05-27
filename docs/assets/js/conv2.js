var bengali_convert = true;
var hindi_convert = true;
var interval = 4500;

function conv_greet_emoji(conv_greet_emoji_Bengali, conv_greet_emoji_Hindi, delay)
{
    var emo = $("#greet_emoji");

    emo.delay(delay).fadeOut( 'fast',
        function(){
            
            if (conv_greet_emoji_Bengali)
            {
                emo.html('🙏');
                //conv_greet_emoji_Bengali = !(conv_greet_emoji_Bengali);
            }
                
            if (conv_greet_emoji_Hindi)
            {
                emo.html('🙏');
                //conv_greet_emoji_Hindi = !(conv_greet_emoji_Hindi);
            }
            
            if((!(conv_greet_emoji_Bengali)) && (!(conv_greet_emoji_Hindi))){
                emo.html('👋');
                //conv_greet_emoji_Bengali = true;
                //conv_greet_emoji_Hindi = true;
            }
        }
    )
    emo.fadeIn('fast');
}

function conv_greet_G(conv_greet_greet_G_Bengali, conv_greet_greet_G_Hindi, delay)
{   
    var greet_G = $("#greet_G");

    greet_G.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            // console.log(conv_greet_greet_G_Bengali, conv_greet_greet_G_Hindi, delay)
            if (conv_greet_greet_G_Bengali)
            {
                greet_G.html('ন');
                // conv_greet_greet_G_Bengali = !(conv_greet_greet_G_Bengali);
            }
                
            if (conv_greet_greet_G_Hindi)
            {
                greet_G.html('न');
                //conv_greet_greet_G_Hindi = !(conv_greet_greet_G_Hindi);
            }
            if ((!(conv_greet_greet_G_Bengali)) && (!(conv_greet_greet_G_Hindi))){
                greet_G.html('G');
                //conv_greet_greet_G_Bengali = true;
                //conv_greet_greet_G_Hindi = true;
            }
        }
    )
    greet_G.fadeIn('fast');
}

function conv_greet_r(conv_greet_greet_r_Bengali, conv_greet_greet_r_Hindi, delay)
{   
    var greet_r = $("#greet_r");

    greet_r.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_greet_greet_r_Bengali)
            {
                greet_r.html('ম');
                //conv_greet_greet_r_Bengali = !(conv_greet_greet_r_Bengali);
            }
                
            if (conv_greet_greet_r_Hindi)
            {
                greet_r.html('म');
                //conv_greet_greet_r_Hindi = !(conv_greet_greet_r_Hindi);
            }
            if(!(conv_greet_greet_r_Bengali) && !(conv_greet_greet_r_Hindi)){
                greet_r.html('r');
                //conv_greet_greet_r_Bengali = true;
                //conv_greet_greet_r_Hindi = true;
            }
        }
    )
    greet_r.fadeIn('fast');
}

function conv_greet_ee(conv_greet_greet_ee_Bengali, conv_greet_greet_ee_Hindi, delay)
{   
    var greet_ee = $("#greet_ee");

    greet_ee.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_greet_greet_ee_Bengali)
            {
                greet_ee.html('স্কা');
                //conv_greet_greet_ee_Bengali = !(conv_greet_greet_ee_Bengali);
            }
                
            if (conv_greet_greet_ee_Hindi)
            {
                greet_ee.html('स्ते');
                //conv_greet_greet_ee_Hindi = !(conv_greet_greet_ee_Hindi);
            }
            if(!(conv_greet_greet_ee_Bengali) && !(conv_greet_greet_ee_Hindi)){
                greet_ee.html('ee');
                //conv_greet_greet_ee_Bengali = true;
                //conv_greet_greet_ee_Hindi = true;
            }
        }
    )
    greet_ee.fadeIn('fast');
}

function conv_greet_tin(conv_greet_greet_tin_Bengali, conv_greet_greet_tin_Hindi, delay)
{   
    var greet_tin = $("#greet_tin");

    greet_tin.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_greet_greet_tin_Bengali)
            {
                greet_tin.html('র');
                //conv_greet_greet_tin_Bengali = !(conv_greet_greet_tin_Bengali);
            }
                
            if (conv_greet_greet_tin_Hindi)
            {
                greet_tin.html('');
                //conv_greet_greet_tin_Hindi = !(conv_greet_greet_tin_Hindi);
            }
            if(!(conv_greet_greet_tin_Bengali) && !(conv_greet_greet_tin_Hindi)){
                greet_tin.html('tin');
                //conv_greet_greet_tin_Bengali = true;
                //conv_greet_greet_tin_Hindi = true;
            }
        }
    )
    greet_tin.fadeIn('fast');
}

function conv_greet_gs(conv_greet_greet_gs_Bengali, conv_greet_greet_gs_Hindi, delay)
{   
    var greet_gs = $("#greet_gs");

    greet_gs.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_greet_greet_gs_Bengali)
            {
                greet_gs.html('');
                //conv_greet_greet_gs_Bengali = !(conv_greet_greet_gs_Bengali);
            }
                
            if (conv_greet_greet_gs_Hindi)
            {
                greet_gs.html('');
                //conv_greet_greet_gs_Hindi = !(conv_greet_greet_gs_Hindi);
            }
            
            if(!(conv_greet_greet_gs_Bengali) && !(conv_greet_greet_gs_Hindi)){
                greet_gs.html('gs!');
                //conv_greet_greet_gs_Bengali = true;
                //conv_greet_greet_gs_Hindi = true;
            }
        }
    )
    greet_gs.fadeIn('fast');
}

function orchestrate_bengali_greeting(){
    // orchestrate bengali Conversion
    
    if (bengali_convert){
        conv_greet_emoji(true, false, 0);
        conv_greet_G(true, false, 100);
        
        conv_greet_tin(true, false, 100);
        conv_greet_ee(false, true, 50);
        conv_greet_r(true, false, 200);
        
        conv_greet_G(false, true, 100);
        conv_greet_ee(false, false, 200);
        conv_greet_tin(false, false, 200);
        
        conv_greet_emoji(false, false, 100);
        conv_greet_ee(false, true, 50);
        conv_greet_r(false, false, 100);
        conv_greet_gs(true, false, 100);
    
        conv_greet_ee(true, false, 50);
        conv_greet_G(true, false, 100);
        conv_greet_emoji(true, false, 200);
        conv_greet_r(true, false, 50);
        conv_greet_tin(true, false, 100);    
    }
    else{
        conv_greet_emoji(false, true, 0);
        conv_greet_G(true, false, 100);
        
        conv_greet_tin(false, true, 100);
        conv_greet_ee(false, true, 50);
        conv_greet_r(false, true, 200);
        
        conv_greet_G(false, true, 100);
        conv_greet_ee(true, false, 200);
        conv_greet_tin(false, true, 200);
        
        conv_greet_ee(false, false, 50);
        conv_greet_G(false, false, 100);
        conv_greet_emoji(false, false, 200);
        conv_greet_r(false, false, 50);
        conv_greet_tin(false, false, 100);
        conv_greet_gs(false, false, 500);     
    }
    bengali_convert = !(bengali_convert);
}

function orchestrate_hindi_greeting(){
    // orchestrate hindi Conversion
    
    if (hindi_convert){
        conv_greet_gs(false, true, 100);
        conv_greet_G(false, true, 100);
        conv_greet_ee(false, true, 50);

        conv_greet_emoji(false, true, 200);
        conv_greet_r(false, false, 50);
        conv_greet_gs(false, false, 100);
        conv_greet_ee(false, false, 50);

        conv_greet_emoji(false, false, 200);
        conv_greet_G(false, false, 100);
        conv_greet_r(true, false, 50);
        conv_greet_ee(true, false, 50);

        conv_greet_gs(false, true, 150);
        conv_greet_emoji(false, true, 200);
        conv_greet_tin(false, true, 50);
        conv_greet_G(false, true, 100);
        conv_greet_r(false, true, 50);
        conv_greet_ee(false, true, 50);
    }
    else{

        conv_greet_emoji(false, false, 0);
        conv_greet_G(true, false, 100);
        
        conv_greet_tin(true, false, 100);
        conv_greet_ee(true, false, 50);
        conv_greet_gs(false, false, 150);
        conv_greet_r(true, false, 200);
        
        conv_greet_G(false, true, 100);
        conv_greet_ee(false, false, 200);
        conv_greet_gs(false, true, 150);
        conv_greet_tin(true, false, 200);

        conv_greet_gs(false, false, 150);
        conv_greet_emoji(false, false, 200);
        conv_greet_tin(false, false, 50);
        conv_greet_G(false, false, 100);
        conv_greet_r(false, false, 50);
        conv_greet_ee(false, false, 50);
    }
    hindi_convert = !(hindi_convert);
}


function greetings_Conversion(){
    orchestrate_bengali_greeting();
    setTimeout(orchestrate_bengali_greeting, 10000);
    setTimeout(orchestrate_hindi_greeting, 14000);
    setTimeout(orchestrate_hindi_greeting, 20000);
};


var orchestrate_greetings = function(){
    greetings_Conversion();
    interval *= 3;
    setTimeout(orchestrate_greetings, interval);
    interval = 360000;
}

setTimeout(orchestrate_greetings, interval);


