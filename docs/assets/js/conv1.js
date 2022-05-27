var conv_I_flag = true;
var conv_ndro_flag = true;
var conv_Pa_flag = true;
var conv_l_flag = true;

var interval = 3000;

function conv_I(delay)
{
    var i = $("#convert_I");

    i.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_I_flag)
                i.html('ই');
            else
                i.html('I');

            conv_I_flag = !(conv_I_flag);
            // console.log(conv_I_flag);
        }
    )
    i.fadeIn('fast');
}

function conv_ndro(delay)
{
    var ndro = $("#convert_ndro");

    ndro.delay(delay).fadeOut( 'fast',
        function(){
            //console.log(conv_ndro_flag);
            
            if (conv_ndro_flag)
                ndro.html('ন্দ্র');
            else
                ndro.html('ndro');

            conv_ndro_flag = !(conv_ndro_flag);
            // console.log(conv_ndro_flag);
        }
    )
    ndro.fadeIn();
}

function conv_Pa(delay)
{
    var Pa = $("#convert_Pa");

    Pa.delay(delay).fadeOut( 'fast',
        function(){
            //console.log(conv_Pa_flag);
            
            if (conv_Pa_flag)
                Pa.html('পা');
            else
                Pa.html('Pa');

            conv_Pa_flag = !(conv_Pa_flag);
            // console.log(conv_Pa_flag);
            //setTimeout(200);
        }
    )
    Pa.fadeIn('fast');
}

function conv_l(delay)
{
    var l = $("#convert_l");

    l.delay(delay).fadeOut('fast',
        function(){
            // console.log(conv_l_flag);
            
            if (conv_l_flag)
                l.html('ল');
            else
                l.html('l');

            conv_l_flag = !(conv_l_flag);
            
            // console.log(conv_l_flag);
            //setTimeout(200);
        }
    )
    l.fadeIn('fast');
}


function orchestrate_Bengali_conv()
{
    conv_I(0);
    conv_l(200);
    
    conv_I(200);
    conv_ndro(100);
    conv_l(150);
    
    conv_Pa(75);
    conv_ndro(100);
    
    conv_I(150);
    conv_Pa(200);
    conv_l(200);
    
    conv_ndro(250);
    conv_Pa(350);
}


var conversions = function(){
    interval *= 1.5;
    orchestrate_Bengali_conv();
    setTimeout(conversions, interval);
    interval = 300000;
}

setTimeout(conversions, interval);