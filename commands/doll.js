//initialise discord.js
const Discord = require ("discord.js");

module.exports = {
    name: "doll",

    //execute command
    execute(dollMsg, args)
    {
        //all doll names in array
        const dollNameList = [
            //index 0 is empty; index 1-33, 2* doll
            " ", "M1911", "Nagant Revolver", "P38", "PPK", "M3", "PPSh-41", "PP-2000", "MP40",
            "Beretta Model 38", "m45", "SVT-38", "SKS", "G43", "FN-49", "BM59", "G3", "L85A1",
            "Galil", "SIG-510", "LWWMG", "DP28", "MG34", "FNP-9", "MP-446", "Spectre M4",
            "IDW", "Type 64", "F2000", "FG42", "AAT-52", "Type 63", "Bren Ten", "USP Compact",
            //index 34-131, 3* doll
            "M9", "TT-30", "Makarov", "P08", "C96", "Type 92", "Astra Revolver", "Glock 17",
            "MAC-10", "FMG-9", "PPS-43", "Skorpion", "Sten MkII", "Micro Uzi", "M1 Garand",
            "M1A1", "M14", "M21", "SV-98", "Type 56", "AK-47", "StG44", "FNC", "M2HB",
            "M249 SAW", "M1919A4", "RPD", "MG42", "Bren", "Hanyang Type 88", "OTs-12",
            "CZ-805", "Serdyukov", "Z-62", "ARX-160", "P99", "Super SASS", "EVO 3", "Type 59",
            "AR70", "6P62", "PSM", "MT-9", "OTs-44", "SSG 69", "M1897", "M500", "KS-23",
            "RMB-93", "HK45", "SCW", "ASh 12.7", "Type 81 Carbine", "TMP", "F1", "wz.29",
            "P226", "NS2000", "M12", "T65", "HK23", "Gepard M1", "OTs-39", "CZ52", "SM-1",
            "T77", "MP-443", "GSh-18", "Model L", "OBR", "MP-448", "Type 03", "RT-20", "TEC-9",
            "Type 62", "Steyr Scout", "Falcon", "Magal", "HK33", "MP41", "T-CMS", "K3", "VP70",
            "Six12", "INSAS", "ZAS M76", "43M", "Vepr", "HSM10", "CAR", "MAS-38", "C14", "WKp",
            "StG-940", "GM6 Lynx", "TS12", "QSB-91", "SUB-2000",
            //index 132-222, 4* doll
            "Colt Revolver", "Stechkin", "PP-90", "MP5", "Springfield", "Mosin-Nagant", "PTRD",
            "SVD", "M16A1", "M4A1", "M4 Sopmod II", "ST AR-15", "AS Val", "G36", "Type 56-1",
            "FAMAS", "TAR-21", "M1918", "M60", "PK", "MG3", "SPP-1", "Mk23", "P7", "UMP9",
            "UMP40", "UMP45", "PSG-1", "9A-91", "Mk48", "PP-19", "PP-19-01", "G28", "AEK-999",
            "Shipka", "M37", "M590", "Super-Shorty", "Type 97 Shotgun", "SPAS-12", "M1014",
            "Spitfire", "Ribeyrolles", "KLIN", "PzB 39", "T-5000", "Ameli", "Ak 5", "USAS-12",
            "Type 80", "XM3", "Thunder", "Honey Badger", "CZ2000", "K5", "XM8", "Cx4 Storm",
            "Mk 12", "A-91", "SPR A3G",  "SAR-21", "Mk46", "K31", "Jericho", "KSVK", "UKM-2000",
            "EM-2", "Chauchat", "P30", "Type 4", "SSG 3000", "M1895 CB", "MAT-49", "Liberator",
            "KAC-PDW", "CR-21", "CF05", "M82", "Defender", "SAF", "Tabuk", "Rex Zero 1",
            "Mondragon", "PM1910", "V-PM5", "HK512", "AR-57", "FX-05", "Derringer", "Fedorov",
            "PPD-40",
            //index 223-333, 5* doll
            "Python", "Thompson", "Vector", "MP7", "Kar98k", "WA2000", "Lee-Enfield", "NTW-20",
            "AK-74U", "G41", "HK416", "AUG", "Grizzly MkV", "M950A", "G36C", "FAL", "MG5",
            "Negev", "Welrod MkII", "Suomi KP/-31", "OTs-14", "G11", "MG4", "NZ75", "Type 79",
            "M99", "Type 95", "Type 97", "SR-3MP", "Five-seveN", "RO635", "IWS 2000", "M1887",
            "KSG","Saiga-12", "AA-12", "FP-6", "CZ75", "RFB", "PKP", "ART556", "DSR-50", "T91",
            "Contender", "S.A.T.8", "JS05", "K2", "Zas M21", "Carcano M1891", "Carcano M91/38",
            "Ballista", "AN94", "AK-12", "HK21", "SRS", "C-MS", "ADS", "MDR", "TAC-50",
            "PM-06", "Type 100", "M870", "M82A1", "Px4 Storm", "JS 9", "K11", "Type 88", "P22",
            "Type 64", "P90", "HS2000", "X95", "Lewis Gun", "M200", "PM-9", "PA-15", "QBU-88",
            "MG36", "R93", "Desert Eagle", "ACR", "Kord", "CAWS", "DP-12", "C-93", "SIG-556",
            "R5", "Howa Type 89", "RPK-16", "AK-15", "Webley", "SL8", "HP-35", "AK-Alfa",
            "ZB-26", "Lusa", "VSK-94", "Steyr ACR", "AUG Para", "General Liu", "VHS",
            "LTLX 7000", "M6 ASW", "SVCh", "Kolibri", "VP1915", "Savage 99", "De Lisle",
            "SIG MCX", "RPK 203", "TKB-408",
            //index 334-356, event doll
            "Noel", "Ephelt", "Kiana", "Raiden Mei", "Bronya", "Theresa", "Murata Himeko",
            "Seele", "Clear", "Fail", "Jill", "Sei", "Dorothy", "Stella", "Alma", "Dana",
            "Henrietta", "Rico", "Triela", "Claes", "Angelica", "Agent Vector", "Agent 416"
        ];

        //all doll images in array
        const dollImageList = [
            //index 0 is empty; index 1-33, 2* doll
            " ", "TDyg0eI", "I66WR6J", "2FmN9kE", "afMv3xN", "8CZURbO", "NZh6hbn", "3nABLKV",   
            "G8qfaWj", "ShJHrvM", "u3lxGD2", "PKm1opR", "2VEuPnW", "diO4aWf", "ZqJzT7M",
            "R7m9c9i", "kV7oRYW", "SzpsXyr", "6uRByuo", "YxHpTXI", "WNQF7Nf", "vAdIn3d",
            "mmdc3IH", "JNcB8cP", "V5chwyI", "5GBmmjs", "GRC4rfg", "E8IahQP", "O7UNuhz",
            "C4lDWNo", "aKAGNDX", "eJpYUf6", "iv07Ab2", "zcAmeLh",
            //index 34-131, 3* doll
            "ScK4LCV", "EEdwTwq", "1wrkZS8", "1jUeQxd", "fxzKvaM", "qP1fmH6", "s4bftWf",
            "WZS6dQd", "DPTATGq", "DigdT8r", "EeVq1z2", "iIRqjtc", "abj6KYJ", "aUmORw7",
            "BP1FvQD", "bSuQFuS", "AuL0DM1", "JxTY3qf", "nJSYgw1", "ko02p7h", "VdZlhRl",
            "1HcDGz8", "hIKDgQR", "PzX80hY", "gNEiOmD", "zlBKp7A", "sJqAX5a", "cuSWQ24",
            "deyHcgZ", "wTJSA1I", "x9H7aIw", "gpHllOF", "HXtzCYc", "zWv3x9M", "Q5P4VcV",
            "Yoh7Lxj", "f6YOPE8", "ecteuvR", "Ohkt8Ri", "xxCDGdV", "zv4gWz0", "bKi9gBv",
            "aWIhQrJ", "7nWTxg0", "5iu6eVo", "QxtCFtc", "qQ4GTl5", "09Sth3C", "oHDJ0fb",
            "3X9Ax24", "KvZCUpE", "QsKOPOa", "w55WDnx", "A83DfEk", "NDqeeLm", "FOYR37h",
            "QP8O1ZM", "tNADyR7", "BCVbd9o", "pR34YdX", "hFQN2a6", "ZWShl1r", "u1HIhp2",
            "gfgPTBm", "WJsv4kL", "mUenFKu", "WyuE9vp", "SlyyUji", "44lAQoC", "TgokXw1",
            "HkJEK5Y", "9kbbLZO", "CIwEjLj", "MOkMQ14", "a6JxcMS", "RoNVknB", "DHridAk",
            "YPIvb9J", "ZEMVjBy", "QCtFb55", "QcoRE7Z", "nR6jBXs", "M81zb67", "akJzQQY",
            "UAGtj5m", "A8cG6VV", "06f0xJD", "itrkueT", "I9VH6az", "LEXDAnr", "LNah8ay",
            "FvwMqrJ", "mc1B7WI", "xWynH4T", "wbZn9Wg", "P5FIPqd", "CqUqeK7", "FDGGkcv",
            //index 132-222, 4* doll
            "ZIYFcG5", "kUX8U5T", "fCMwLrB", "bnN8IYw", "1GhErHe", "nviQzQ4", "0qTcq02",
            "UPmfLXb", "QoZb4rU", "ldDt8v9", "UNaV986", "wvNzzDQ", "y1cKcRO", "wCVFKUX",
            "GZ0oB88", "1Uhszjw", "uWoyc2L", "KKVLEvs", "gHcUtkD", "IrEroWK", "8Wz92iK",
            "dbOIAuL", "iBbREH4", "RYR9vuT", "tOcNMa1", "CdH4Djv", "5tEZfDS", "OjtwTqf",
            "g8ARnW7", "GAzq0Z6", "h54KZvD", "E4kINtN", "7lXNRAo", "ggUV6Rv", "6OpbN0O",
            "9qJWZJX", "zpTVM8D", "aJBbCAB", "QjckSvb", "ankZg4z", "RsRtxSU", "P1QTOwo",
            "gri7d4x", "BpY79mE", "qqgKprR", "dVCicaH", "wiFXMXi", "DpoaPdj", "UATQzxj",
            "3np2vWg", "QYPn4Za", "zDsG50I", "23dlboy", "fTlus7D", "LLVSOYI", "SLAADvX",
            "uDzxKQJ", "DDwAZaH", "WYSffQq", "3SGgiBB", "eVHbUJC", "gtA4QxI", "Y6Vrid2",
            "dZWAXL2", "UZ3SzNo", "pKaHy1L", "u0f0Y1i", "lliPhnD", "dW6jv2K", "c8L6UKG",
            "dkjib4K", "mubvQNB", "9dVWj59", "pCFYI8q", "4S02Vbb", "3QFob5E", "RLC2myv",
            "kO6tEbL", "LBwYy0G", "0TpYvHK", "9m3W4Ln", "uw3hvFK", "PjvwXKr", "cDRhGgK",
            "cDRhGgK", "JVmhbzW", "9MWoY63", "dP72J2O", "gMqUC3I", "gfS9n3z", "uYo9UdF",
            //index 223-333, 5* doll
            "y8BNWkg", "Temn99X", "ULfun3d", "2r0tIt2", "Ium7Q9L", "G9WMcdD", "OQMmthJ",
            "XqC1fun", "5ef9lmy", "xGPy0Be", "umNI9Sl", "yS2x1A4", "qLMPc46", "nCPkTlj",
            "VdXxuN5", "VzDKguQ", "GfIOhbN", "rDWWLQU", "TRFoOns", "8DeYvyu", "KcBdDfT",
            "dzZ1F1z", "KciVfjU", "pLHqNkH", "qPUzr3k", "2c8EICG", "JC3hmnN", "THPmujy",
            "axGowSg", "WAG6F0s", "rMQJfCI", "2YCbtM0", "4FyYWhX", "QWT1Lvg", "ds9CbtU",
            "ds9CbtU", "7QzPTaY", "Ib5E00l", "NxbbYDe", "jtoGBag", "XGDxf66", "3HKGiwv",
            "n3IQKL1", "3wg0BQu", "q12Ofnt", "1eJXw9r", "Rxd6QA4", "cGXYxmz", "zNboCiW",
            "sbCRIDy", "ltl5VMJ", "lkwl8A6", "lzsOpGc", "UaVq2FR", "HN4Uo5m", "mHUgmGC",
            "UH8KHGL", "jKybwtm", "Sor4azZ", "HgAlx0r", "vcUeQZN", "6b8R6dL", "V8SRw8w",
            "PQhD8Nq", "xXoV9re", "lUuErfu", "nvo97PW", "NWIYMca", "RdSWMdS", "Cx9DK7T",
            "7PjQfZF", "TslM9OF", "1R6oAzC", "S36YpBW", "sTJK0kS", "QwtRx4R", "8Mlbt0z",
            "TQJdbde", "BjElda7", "cCfKGtj", "MQ7w0qa", "qq3AU38", "SuT6i3w", "mqEsi8I",
            "UfRl9XB", "JLfbfQZ", "tFkiYlD", "v730t2n", "Bhg0p9s", "sXFCCp2", "vf9geUH",
            "BlM0uR7", "To4QKXu", "QW9BgSL", "9ItsVTD", "OX8H75M", "LKCpLc7", "gF2hIjN",
            "YGnuyb7", "kEeWUPg", "pdPvWNq", "MbHbizr", "h8m3Mrr", "A23sV7f", "LDvlkPu",
            "qbhRwMU", "GJmP0vQ", "v655DrX", "NtUW5M6", "UaemUoi", "8Xl4Cfb",
            //index 334-356, event doll
            "QB9dYYH", "U2zk94U", "JmEzrad", "BIaSy27", "fd4qvf5", "wK0yuoi", "nSggKnx",
            "JEKgXP2", "WA29T1A", "mrKxapO", "2JlldUw", "a5x2wFH", "2vgqE8Q", "hMWsYuh",
            "G4WecYw", "ftxfxpO", "mztmw7F", "NuG3OjN", "R3Qe8jB", "G7uKlpD", "nBYs5cG",
            "xzfO2sv", "AAvKLk2"
        ];

        //all doll acquisition quotes in array
        const dollQuoteList = [
            //index 0 is empty; index 1-33, 2* doll
            " ",
            "What a fateful encounter! Never in my  \nimagination would I have expected to" +   //M1911
            "\nmeet you here, Commander.",
            "You're quite the odd one for having    \ntastes in someone as old as I, aren't" +  //Nagant Revolver
            "\nyou?",
            "This is... the fated encounter!",                                                  //P38
            "Hehe ♪ Commander, being able to meet   \nyou here, I am thoroughly delighted.",    //PPK
            "He-hello, commander, I'm... M3         \nsubmachine gun... P-please take care" +   //M3
            "\nof me!",
            "Please to meet you, Commander!         \nY'know.. I'm not that heavy at all!",     //PPSh-41
            "PP-2000 submachine gun. I will be      \nstaying by your side from now on," +      //PP-2000
            "\nhehe~",
            "Commander, I will do my best for you!",                                            //MP40
            "M38, let's get along from now on,      \nCommander.",                              //Beretta M38
            "Thanks for giving me shelter           \ncommander. I can bake very tasty" +       //m45
            "\nbread, and I'll do my best in battle \ntoo!",
            "SVT-38 reporting. Commander, your      \norders?",                                 //SVT-38
            "Hello, Commander. A trump card like    \nme is worth a hundred soldiers. Take" +   //SKS
            "\ngood care of me!",
            "Guten tag! I am G43, please allow me   \nto display my elegance in battle from" +  //G43
            "\nthis day forward.",
            "P-p-p-p-pleased to to meet you...",                                                //FN-49
            "BM59, reporting in. Having been        \nthrough numerous upgrades, I will" +      //BM59
            "\ndefinitely not let you down,         \nCommander.",
            "Greetings Commander, from now on       \nplease address me as G3.",                //G3
            "Hello, I am L85A1. Care for a cup of   \ntea, Commander?",                         //L85A1
            "Heya! I'll be counting on you from     \nnow on, my Commander.",                   //Galil
            "Hello, SIG-510 reporting. I will be    \nby your side from now, please let me" +   //SIG-510
            "\nbecome your strength.",
            "Pleased to meet you, Commander. There  \nis ... no need to introduce me to the" +  //LWMMG
            "\nothers, I'm fine working alone after \nall ...",
            "A pleasure to meet you, young man. Feel\nfree to let me know ... if you're" +      //DP28
            "\never troubled.",
            "So you're the Commander, huh? I'm      \nMG42's older sister, MG34! Let's get" +   //MG34
            "\nto know each other!",
            "It's time for FNP-9's... glorious...   \ndebut! Commander... please give me..." +  //FNP-9
            "\nyour support from now on...",
            "Finally found me, huh? I'm MP-446,     \nbut please call me " + '"Viking"' + "!",  //MP-446
            "Spectre M4, formally joining your      \nranks, sir! Um... Commander? Is there" +  //Spectre M4
            "\nno welcoming party?",
            "IDW here! Are you the commander who    \nis willing to adopt me? I'll do my" +     //IDW
            "\nbest!",
            "Type 64 reporting. Commander,          \nI'm honored to learn from you.",          //Type 64
            "Fresh out of the factory, F2000,       \nreporting! Ufufu, Commander, don't be" +  //F2000
            "\nshy and let's get along from now on!",
            "FG42, reporting for duty. It is my     \nhumble wish to hone myself further" +     //FG42
            "\nunder the Commander.",
            "Bonjour, Commander! AAT-52 machine     \ngun, reporting for duty!",                //AAT-552
            "Type 63 automatic infantry gun just    \narrived. I am grateful that you gave" +   //Type 63
            "\nme one more chance to fight again!",
            "The Star of Hope of the handgun        \nworld, Bren Ten! Here I am!" +            //Bren Ten
            "\nCommander, look forward to my first  \nbattle!",
            "Umm... I'm USP Compact. From now       \nonward I'll be working under you." +      //USP Compact
            "\nP-please take care of me.",

            //index 34-131, 3* dolls
            "M9 here! I'm super popular!",                                                      //M9
            "Ah. commander. I'll be under your      \ncare.",                                   //Tokarev
            "Rather than the Commander giving       \norders, working together is the" +        //Makarov
            "\nbetter plan. Under me that is~",
            "P08 pistol. I may not be the best at   \neverything, but I look forward to" +      //P08
            "\nworking under you!",
            "You're my Commander, aren't you?",                                                 //C96
            "Type 92, reporting in! Which squad am  \nI being assigned to?",                    //Type 92
            "I'll be in your care from now on,      \nCommander!",                              //Astra Revolver
            "G17, reporting! Hey ... at least       \nsmile a little huh?",                     //Glock 17
            "If it's the Commanders orders... then  \n I, Ingram... would be delighted to" +    //Ingram
            "\nserve.",
            "FMG-9 is under your command now,       \nboss. There's no cause for alarm, I'm" +  //FMG-9
            "\nnot in my firing mode at the moment.",
            "Comrade, it is my greatest honor to    \nmeet you. I may be a lightweight, but" +  //PPS-43
            "\nI have my merits.",
            "Skorpion submachine gun is here! Give  \nme a royal welcome! ...Don't be" +        //Skorpion
            "\nafraid, I'm really harmless.",
            "Are you the Commander? I often hear    \nabout you, I will be in your care" +      //Sten MkII
            "\nfrom now.",
            "Just where are you looking at !? It's  \ne-embarrassing, so stop it!",             //Micro Uzi
            "M1 Garand, Commander, please let me    \naccompany you from now on.",              //M1 Garand
            "M1A1, reporting in. Let's overcome     \nthese trials together.",                  //M1A1
            "Commander, I will not let you down!",                                              //M14
            "Hello! It's M21! Just because I'm a    \nsniper rifle, doesn't mean I have to" +   //M21
            "\nhave a gloomy personality, right?!",
            "SV-98, reporting in, what are your     \norders?",                                 //SV-98
            "Type 56 semi-automatic carbine,        \nofficially enlisting. Commander," +       //Type 56
            "\neveryone, it's nice to meet you!",
            "Hahaha, my turn at last, huh? I'll be  \nsure to show you what I can do on the" +  //AK47
            "\nworld stage",
            "Pleased to make your acquaintance.     \nA-ah, there's no need for a handshake" +  //StG44
            "\nor anything.",
            "Pleased to meet you, Commander. Want   \nsome chocolate?",                         //FNC
            "Hey there~ Commander, are you ready    \nto rain a hail of lead onto the" +        //M2HB
            "\nenemy? I know I am~",
            "Commander? Don't expect too much from  \nme okay~?",                               //M249 SAW
            "M1919A4 at your service! Let's mow'em  \ndown!",                                   //M1919A4
            "RPD reporting in, Commander. It is an  \nhonor to fight alongside you.",           //RPD
            "Nice to meet you commander. Would you  \nlike to hear cloth ripping sound?",       //MG42
            "Bren light machine gun. I can handle   \nwhatever mission you throw at me.",       //Bren
            "Welcome to the CA club! Hanyang Type   \n88, it's a pleasure to be of service" +   //Hanyang Type 88
            "\nto you, master.",
            "Secret weapon OTs-12 'Yew Tree',       \nreporting. Commander, is any further" +   //OTs-12
            "\nexplanation required?",
            "Yoohoo! The brand new and outstanding  \nCZ-805A1 is at your service from now" +   //CZ-805
            "\non! Look forward to my performance!",
            "Good afternoon, I'm Serdyukov SPS.     \nStarting today I'll be in charge for" +   //Serdyukov
            "\nescort duty. Please look forward to  \nit.",
            "I'm Star Z-62, Commander thank you     \nfor having me here, I will do my" +       //Z-62
            "\nbest.",
            "Ciao.. I'm ARX-160, a next generation  \nweapon... Emmm, I don't look like" +      //ARX-160
            "\none? Close enough though right?",
            "I'm Walther P99. I was enlisted do my  \njob properly.",                           //P99
            "Commander, Super SASS reporting. As a  \nnew recruit, hoping you can provide" +    //Super SASS
            "\nadditional guidance.",
            "Hello, Commander~ Scorpion EVO 3,      \nofficially part of the team as of" +      //EVO 3
            "\ntoday. Please look after me~",
            "So you are my commander. I'm Type 59~  \nHereafter please look after me.",         //Type 59
            "Greetings, Commander, I'm Berretta     \nAR70. I look forward to our time" +       //AR70
            "\ntogether. I'm sure it'll be          \nwonderful.",
            "Greetings, I'am 6P62. It's fine if     \nyou don't recogize me now, as you'll" +   //6P62
            "\nrecognize my strengths soon enough!",
            "PSM pistol, reporting for duty! Um...  \nare you perhaps shorthanded," +           //PSM
            "\nCommander?",
            "I'm Taurus MT-9! Please guide me to    \nvictory, Commander!",                     //MT-9
            "I finally get to meet you,             \nCommander!~ I'm OTs-44, may I stay" +     //OTs-44
            "\nhere with you?",
            "Hello Commander, am I late? Did I      \nmiss anything interesting?",              //SSG 69
            "Commander, I'm Winchester 1897.        \nWhether it's cleaning or fighting," +     //M1897
            "\nI'll do my best!",
            "Hello Commander! Mossberg 500 shotgun  \nhere. I'm very happy to meet you!" +      //M500
            "\nQuick! Quick! Give me some orders!",
            "KS-23, heh heh... commander, are you   \nscared? Don't be nervous~ we'll be" +     //KS-23
            "\nworking together for a looong time.",
            "RMB-93, happy to serve, but before     \nthat lets talk about the servicing" +     //RMB-93
            "\ncost.",
            "Pleased to meet you, Commander. It's   \nme, the cute and charming HK45! Now," +   //HK45
            "\nmay I ask you for a dance?",
            "So you're my Commander? ...Hmm, I      \nlike the look of your eyes. I'll be" +    //SCW
            "\nin your care from now on.",
            "ASh-12.7... Commander identification   \ncomplete... Standby mode engaged," +      //ASh-12.7
            "\nover.",
            "Greetings Commander, thank you for     \nenlisting Type 81 Carbine's service." +   //Type 81 Carbine
            "\nI will take you to your victorious   \ndestination, this journey will" +
            "\nbe a pleasing one.",
            "Hello, commander, I am Steyr TMP...    \nPlease, please don't look at me like" +   //TMP
            "\nthis! Please...",
            "G'day mate~ You'r my new commanda?     \nI'm a poet but I sometimes fight war" +   //F1
            "\ntoo~",
            "Karabinek 29...Commander, is there     \nabsolutely no way we can avoid" +         //wz.29
            "\nfighting?",
            "You need me? As expected from an       \nelite commander, you really know your" +  //P226
            "\nstuff. Please look forward to my service.",
            "'Sup, Commander! I'm NeoStead 2000!    \nSo, do you like me?",                     //NS2000
            "Ciao! M12 submachine gun will be       \nfollowing your orders from now on." +     //M12
            "\nCommander, do you want me to sortie  \nimmediately?",
            "I'm T65! Why I didn't come until now?  \nYou know, I-I'm... Hey Commander, are" +  //T65
            "\nyou listening?!",
            "You... You are the Commander? I'm      \nHK23, please, don't be too harsh on" +    //HK23
            "\nme....",
            "This is my new place of work?          \n...Alright, Gepard M1, reporting in.",    //Gepard M1
            "Not everybody can become an eye-       \ncatching one, but everyone still have" +  //OTs-39
            "\ntheir own duties... Commander, what  \nkind of duty will you be giving me?",
            "Greetings Commander, I'm CZ52, even    \nthough I'm just a new member, I" +        //CZ52
            "\nhumbly implore you to look after me  \nfrom now on.",
            "Coming here and working at this place  \nis really not easy, huh ... Hello," +     //SM-1
            "\nCommander. I hope that the time has  \ncome for me to start work" +
            "\nimmediately.",
            "Hmm? Do you still don't get it,        \nCommander? You can tell just from" +      //T77
            "\nlooking don't you. I'm the newly     \njoined T77 submachine gun...",
            "Oh my, I was looking for interesting   \nstone gems, I wasn't expecting to" +      //MP-443
            "\nfind something even more             \ninteresting... Commander, would you" +
            "\nmind becoming a part of Rook's       \ncollection?",
            "GSh-18 reporting in! No matter how     \ndifficult the task, I can handle it!" +   //GSh-18
            "\nGive your orders at any time!",
            "Greetings, you must be my Commander,   \nwould you mind shaking hands?..." +       //Model L
            "\nThank you for your cooperation.",
            "You are the Commander? Should be the   \nright one ... As long as I work hard" +   //OBR
            "\nhere, my debts problems should...    \nEmm? No sorry, nothing.",
            "It's an honor to meet you, Commander.  \nI hope my efforts will further" +         //MP-448
            "\nsimplify your victories.",
            "We meet at last Commander, I'm Type    \n03. There must be a lot to learn" +       //Type 03
            "\nunder your guidance.",
            "I wonder if the Commander is coming    \nup with something for this RT-20's" +     //RT-20
            "\nturn? I'll be looking forward to it.",
            "I heard that I can do some work here   \nthat isn't so close to human" +           //TEC-9
            "\ncontact... Wait, wait! You, are you  \nhuman?!",
            "Type 62, reporting in! Hello,          \nCommander! …No, do you have anything" +   //Type 62
            "\nbad to say?",
            "Trefoil, are you sure it's this        \nperson? To be accepted by Trefoil..." +   //Steyr Scout
            "\nthe Commander is no normal person.",
            "Ahoj! Little Lamb ... ah, no,          \nCommander! Please, just call me" +        //Falcon
            "\nFalcon.",
            "Hello, Commander. Your heartbeat       \nsounds quite smooth, very good.",         //Magal
            "HK33, reporting to Griffon command.    \nBut... Commander, are you really my" +    //HK33
            "\nally? I can't tell from your         \nexpressions ...",
            "Greetings, Respectable Commander! To   \nbe able to serve you in any capacity" +   //MP41
            "\nis my greatest honor!",
            "Truvelo-CMS, reporting for duty...     \nUmm, Commander, I said reporting for" +   //T-CMS
            "\nduty, did you hear me?...",
            "K3 has arrived at her destination!     \nCommander, please decide on the next" +   //K3
            "\ntraining menu!",
            "According to my scans, your            \nprogramming is relatively stable, and" +  //VP70
            "\nthe chance of a bug appearing is low.\nYou are the best candidate to be my" +
            "\nCommander.",
            "Six12, reporting for duty. Please      \nsort out what you think.",                //Six12
            "Hmph, you must be truly blessed to     \nhave a most noble and resplendent" +      //INSAS
            "\ndoll like me.",
            "Hello, Commander. My name is Zas M76,  \nplease look forward to my" +              //Zas M76
            "\nperformance. I will prove that I am  \nsuperior to SVD in all aspects.",
            "Good day, Commander! Today's a good    \nday as well, isn't it?",                  //43M
            "Nice to meet you, this is Vepr. I am   \nhonored to be able to use it as a" +      //Vepr
            "\ncommander. Um... don't read this QR  \ncode without permission!",
            "High Standard M10 shotgun, reporting!  \nMy allegiance is to you, sir!",           //HSM10
            "C-Commander... hello, I am CAR...      \nI-I'm welcome here? No no, it's" +        //CAR
            "\nnothing, as long as it is a safe     \nplace...",
            "Be bold, Commander! While this type    \nof encounter is not bad, we are" +        //MAS-38
            "\ndefinitely suitable to a more        \nheated atmosphere.",
            "Eliminating your targets in silence,   \nC14 " + '"Timberwolf"' + " reporting!",   //C14
            "N/A",                                                                              //WKp
            "Hello, Commander. StG940 here to       \nreport. You may call me Vig, but of" +    //StG-940
            "\ncourse it's better to call me big sis\nVig♪",
            "N/A",                                                                              //GM6 Lynx
            "N/A",                                                                              //TS12
            "Good sir--I'm the new employee, Type-  \n91! I'm an almighty doll who knows" +     //QSB-91
            "\neverything! Please, call me Xiaowan!",
            "N/A",                                                                              //SUB-2000

            //index 132-222, 4* dolls
            "You called for me, Commander? Do you   \nhave cola? Hey ~ you have cola right?",   //Colt Revolver
            "Automatic Pistol Stechkin, APS, at     \nyour service!",                           //Stechkin
            "PP-90, at your service. Looking        \nforward to your first order" +            //PP-90
            "\nCommander.",
            "MP5, reporting in. Sma... I might be   \na bit small but I will definitely" +      //MP5
            "\nhelp out!",
            "Commander, if there is anything that   \nI can do for you, just give the" +        //Springfield
            "\norder.",
            "Comrade, хорошо (very good)!",                                                     //Mosin-Nagant
            "Don't worry commander. No one can escape from my bullet.",
            "Sniper SVD. Let see here, who is       \nlucky enough to welcome me.",             //SVD
            "Yo, it's M16. Leave the mission to     \nme.",                                     //M16
            "Commander, please take care of me.",                                               //M4A1
            "M4 SOPMOD II, finally... Finally...    \nI've found you commander!",               //M4 SOPMOD II
            "ST AR-15. Please allow me to formally  \njoin this honorable squad and watch" +    //ST AR-15
            "\nme as I bring you victory.",
            "Good afternoon..... I..... Eh.....     \nnothing......",                           //AS Val
            "Guten tag. I will exclusively serve    \nas your maid from now on, Master.",       //G36
            "Ni hao Commander, I'm the Type 56-1    \nassault rifle. I will annihilate all" +   //Type 56-1
            "\nthe enemies in your way!",
            "I'm prepared to fight enemies ten      \ntimes my number. Are you ready," +        //FAMAS
            "\nCommander?",
            "I'm TAR-21, please take good care of   \nme from now on.",                         //TAR-21
            "Browning M1918 here. AH, Commander,    \nyou're here, please don't scare me!",     //M1918
            "I'm M60, your orders please!",                                                     //M60
            "Commander, I will eliminate your       \nfoes, in exchange please stay a" +        //PK
            "\nreasonable distance away from me.",
            "I'm the newly joined MG3. I'll show    \nyou a storm-like firepower!",             //MG3
            "Designed for underwater operation,     \nunderwater gun, SPP-1. Although I can" +  //SPP-1
            "\nbe used on the surface, underwater   \nis my strong point.",
            "Hello Commander! Starting today we'll  \nbe together.",                            //Mk23
            "At last, P7 has officially joined her  \nfriends! Look at me smile, sir, we'll" +  //P7
            "\nget along fine!",
            "UMP9 has come home! Everybody, we're   \nfamily now!",                             //UMP9
            "UMP40, making an appearance!           \nCommander, I will replace all those" +    //UMP40
            "\noutdated girls for you!",
            "UMP45 has arrived. Commander, let's    \nget along from now on~",                  //UMP45
            "Nice to meet you, I am GR PSG-1.       \nThank you for placing your trust in" +    //PSG-1
            "\nme, and I'll be sure to make the     \nmost out of this opportunity you've" +
            "\ngiven me.",
            "So you are the Commander? My name is   \n9A-91. Make sure you remember it" +       //9A-91
            "\nwell, okay?",
            "Oh my, so you are commander? I`m       \nMk48, hope we can have plenty of fun" +   //Mk48
            "\nhere♥",
            "PP19 reporting in! Are you the         \nCommander? Please do well to remember" +  //PP-19
            "\nme.",
            "Destiny or coincidence... How would    \nyou describe our meeting here," +         //PP-19-01
            "\nCommander?",
            "Sniping weapon G-28! Commander hurry   \nup and take me home, if you don't" +      //G28
            "\nmind having me around!",
            "Is the Commander here? Barsook, the    \nfate of this name will now be handed" +   //AEK-999
            "\nto you!",
            "Shipka has arrived, Commander. I'll    \nbe looking forward to the welcoming" +    //Shipka
            "\nceremony.",
            "You can call me Ithaca, I'll be        \njoining your ranks so let's all have" +   //M37
            "\na good time, Commander.",
            "Greetings Commander, Mossberg model    \n590 reporting in. Please give your" +     //M590
            "\norders at any time.",
            "I'm Super-Shorty!... Hey, where are    \nyou looking, Commander!? I'm down" +      //Super-Shorty
            "\nhere!",
            "I'm Type 97 Shotgun! I'm honored to    \nbe able to follow you, commander." +      //Type 97 Shotgun
            "\nPlease use me through and through!",
            "I'm Franchi SPAS-12! Allow me to be    \nyour sturdy shield!",                     //SPAS-12
            "Excuse me, are you the Commander? I    \ndidn't expect you to be this young; I" +  //M1014
            "\nthought you'd be one of the older    \ntypes... Ah, sorry, that was rude of" +
            "\nme!",
            "Commander, I'm Spitfire. I might not   \nbe as good as big sister 75, but I" +     //Spitfire
            "\nwill still do my best to bring you   \ntriumph.",
            "I am Ribeyrolles 1918; I'll be in      \nyour care from now on. I would" +         //Ribeyrolles
            "\nappreciate it if you were to add an  \nextra bed to the sick bay for me...",
            "Remember this Commander! I, KLIN will  \nbecome the NO.1 tactical doll in all" +   //KLIN
            "\nof G&K!",
            "Commander, I'm PzB39, I will be your   \nsubordinate as of now... What's" +        //PzB39
            "\nwrong? Relax a little, no need to    \nbe so tense.",
            "Hello, T-5000 here. If your            \nexpectations were high, then please" +    //T-5000
            "\nforget it.",
            "So I only need to report to you,       \nCommander?...Then according to the" +     //Ameli
            "\nrules, I belong to you now.",
            "Greetings, Commander. I'm Ak 5. From   \nnow on, all I have to offer is for" +     //Ak 5
            "\nuse at your discretion, Commander.",
            "Arrived earlier than I expected, well  \nthen... in terms of formal addressing" +  //USAS-12
            "\nI can consider you barely passed, so \nlet's get along from now, Commander~",
            "Umm... are you the commander? I'm      \nType 80. As long as you don't remove" +   //Type 80
            "\nmy core, you can do whatever you     \nwant.",
            "Commander, it is up to you however     \nyou wish to use me, from now on" +        //XM3
            "\nplease make full use of this power.",
            "An unfamiliar face, are you new        \naround here?... I apologize, that" +      //Thunder
            "\nwas supposed be your line.",
            "Commander, no matter what kind of      \nbattlefield, I, " + '"Honey Badger"' + ", am" +   //Honey Badger
            "\nwilling to fight, please witness my  \nperformance!",
            "CZ2000 reporting in! Commander, you    \ncan rely on me to watch everyone's" +     //CZ2000
            "\nback!... Huhu ~ always wanted to     \nsay this line!",
            "So it is, as it is proven by           \ncountless evidences... Commander, our" +  //K5
            "\nmeeting, was fated.",
            "I heard there are a lot of             \ninteresting people here, but... you" +    //XM8
            "\ndon't look very interesting, you     \nwouldn't disappoint me would you?",
            "I will definitely find my true self    \nhere!... I'm Cx4 Storm, Commander," +     //Cx4 Storm
            "\nlook forward to your guidance.",
            "Commander, if there are only boring    \norders here, I wouldn't stay around" +    //Mk 12
            "\ntil the end.",
            "Emm? Who is here to pick me up?        \n...one, ...two, Hehe, that's a lot of" +  //A-91
            "\nCommanders~",
            "Apologies Commander, I've supervised   \nyou for three days and nights before" +   //SPR A3G
            "\narriving here, just some personal    \ninvestigations, hope you won't mind" +
            "\nit too much.",
            "SAR-21 here, Commander.... Where is    \nyour battle plan? Relying on" +           //SAR-21
            "\ninstincts alone during an operation  \nisn't a good thing, you know.",
            "New commander huh? I don't want to     \nentrust my life to someone I just met" +  //Mk46
            "\nbut since it's work, it can't be     helped. Let's seal the deal.",
            "Very good, this is just as planned.    \nMeeting me now is the luckiest moment" +  //K31
            "\nof your life, Commander.",
            "Are you the one leading this place?    \n…You don’t look like it at all. Take" +   //Jericho
            "\nout whatever majesty you have and    \ndisplay it. Do not undermine the" +
            "\nidentity of a Commander.",
            "Fate's Chosen Commander, I shall bear  \nwitness to thine advance, please be" +    //KSVK
            "\nconscious of it!",
            "Are you... the Commander? Looks like   \nI'm working with you from now on. As" +   //UKM-2000
            "long as I'm here, " + '"they"' + " should not\nfind me...",
            "Hello, Commander. EM-2 Assault Rifle,  \nreporting for enrollment today...." +     //EM-2
            "\nHmm, based on your reaction, this    \nintroduction should leave a good" +
            "\nimpression.",
            "Are you the Commander of this unit?    \nThen, Chauchat M1915, reporting for" +    //Chauchat
            "\nduty.",
            "P30 reporting! Alright! I have         \nalready remembered what the Commander" +  //P30
            "\nlooks like~",
            "Type 4 automatic rifle, sending you    \nour regards. If perchance you should" +   //Type 4
            "\nhave any need, permit us the honor of\nyour commands!",
            "SSG 3000 has arrived at the            \ndestination, now awaiting Commander's" +  //SSG 3000
            "\norders.",
            "Hello, I am M1895 Heavy Machine Gun,   \nhere to register for duty... This is" +   //M1895 CB
            "\nthe Griffin Command Center, right?...\nThank goodness, I didn't get lost.",
            "Lord Commander, are you the one that   \nI am fated to defend?",                   //MAT-49
            "Hello! The fair and just Winchester    \nLiberator has arrived! Commander," +      //Liberator
            "\nplease dispatch me to all the unfair \nbattlefields!",
            "KAC, saluting! There's the smell of    \ngrapes... You're the Honey I've been" +   //KAC-PDW
            "\nlooking for! Don't be a stranger, you\ncan call me honey too~ ❤",
            "CR-21, falling in! Leave your          \nsecurity and daily training plans" +      //CR-21
            "\nto me!",
            "Horaay! I finally found a place where  \nI can have a hotpot! Wonderful!" +        //CF05
            "\nUmm... hello, Commander.",
            "Valmet M82, reporting to you. May I    \nalways be by your side... should you" +   //M82
            "\nfind me useful.",
            "Defender, r-reporting... don't come    \nany closer, just give me my orders.",     //Defender
            "Commander, hello. I am your new        \nsubordinate, SAF. What a wonderful" +     //SAF
            "\nscent... please give me a hug...",
            "Oh my, why is this check-in            \nasymmetrical. Sorry, I think I'm" +       //Tabuk
            "\ngoing to faint...",
            "Rex Zero 1, ready to serve the chief   \nat any time. Anything I can do to" +      //Rex Zero 1
            "\nhelp?",
            "Pleased to meet you, Commander.        \nPlease call me Mondragon M1908." +        //Mondragon
            "\nShould something come up, please     \ngive me the order.",
            "The name is PM1910! Call me whenever   \ngunshots start roaring!",                 //PM1910
            "Wow, I'm PM-5. At the very least, try  \nnot to get in the way...",                //V-PM5
            "N/A",                                                                              //HK512
            "Tactical doll, AR-57... why are you    \nstanding so far away? I won't do" +       //AR-57
            "\nanything to you.",
            "N/A",                                                                              //FX-05
            "N/A",                                                                              //Derringer
            "Hello, Commander, Fedorov here. I was  \npreviously a combat medic for a time," +  //Fedorov
            "\nand am currently assigned to         \nproviding remote fire support. Your" +
            "\norders, please.",
            "Hello, Commander, PPD-40 reporting     \nfor duty. Let me make this clear to" +    //PPD-40
            "\nyou that what I hate the most is     \nthe temporary arrangement of" +
            "\novertime. Surely you're not that     \nkind of boss, right?",

            //index 223-333, 5* dolls
            "Commander, are you my new " + '"prey"' + "?\nHaha, don't worry, I mean no" +       //Python
            "\ndisrespect.",
            "You're the new boss eh? Chicago        \nTypewriter, I'll be in your care.",       //Thompson
            "Oh? A new commander? Well...let's all  \nget along.",                              //Vector
            '"Feeder"' + ", you are finally here to \npick me up? Good work~",                  //MP7
            "Mauser 98k, at your service. Please    \nallow me to sweep aside the obstacles" +  //Kar 98k
            "\nin our path.",
            "My name is WA2000. Commander, I won't  \nlet you off if you get in my way!",       //WA2000
            "I, Lee-Enfield, will be your           \nsubordinate from now on and follow" +     //Lee-Enfield
            "\nyour lead always.",
            "Commander, I'm the anti-materiel       \nrifle NTW-20. Fortified steel wall or" +  //NTW-20
            "\nnot, I will show you I can pierce    \nthrough it all.",
            "Ahh, you the boss? AK-74U is my name.  \nFor the sake of your career, please" +    //AK-74U
            "\nthoroughly consider the services I   \nprovide.",
            "G41. Are you my master? Please take    \nme home, I'll work hard!",                //G41
            "Are you the commander? HK416......     \nPlease remember this name, this..." +     //HK416
            "\nextraordinary name.",
            "Commander, for the flowers on our      \nfoe's funeral... I must be best" +        //AUG
            "\nchoice you have.",
            "Oh? Why if it isn't the Commander.     \nGrizzly MkV, I'll be tagging along" +     //Grizzly MkV
            "\nfrom now on.",
            "M950A. Commander, from now on I'll     \nfollow your orders.",                     //M950A
            "Greetings, I'm G36C, very pleased to   \nmeet you. Ummm... is G36 nee-san here" +  //G36C
            "\ntoo?",
            "Well then, you're the Commander, huh?  \nMake sure you don't let me down.",        //FAL
            "(smirking) Surprised, Commander? MG5,  \nI'll be serving under your orders" +      //MG5
            "\nfrom now on.",
            "Combat specialist " +'"Negev"' + " reporting\nin, be prepared to make good use of" +   //Negev
            "\nme.",
            "Welrod Mark II, reporting. There's no  \nneed for a formality, since I'm well" +   //Welrod MkII
            "\nsuited for darkness, I have no need  \nfor ceremony...",
            "Suomi Type 1931 reporting.             \nCommander... Please allow me to carry" +  //Suomi KP/-31
            "\non my duties under your commands!",
            "OTs-14 " + '"Lighting"' + ", Are you my\nCommander?...... Very good, There" +      //OTs-14
            "\naren't many chances like this, so let\nus get along.",
            "G11...... Commander, are there enough  \nbeds around here?",                       //G11
            "H&K MG4, will be serving you from      \ntoday on. *sigh* hope I can fit in" +     //MG4
            "\nhere...",
            "NZ75, responding to your summons, let  \nus perform our duty together.",           //NZ75
            "Sir, Type 79 reporting in, your        \norders?",                                 //Type 79
            "Salute! Nice to meet you, I'm M99!     \nCommander, please keep up the good" +     //M99
            "\nwork!",
            "Greetings Commander. Domestically      \nproduced Type 95 will be under your" +    //Type 95
            "\nservice from today on, please look   \nafter me.",
            "Chinese made Type 97, requesting       \nentry. You're my new Commander right," +  //Type 97
            "\nis sis 95 also here?",
            "SR-3MP " + '"Whirlwind"' +", at your service!\nI've heard rumors about your" +     //SR-3MP
            "\ncapabilities and I'd like to take a  \ngood look for myself. Be sure to show" +
            "\nme what you're made of.",
            "Oh my, you're my Commander huh? Well   \nbetter you take good care of me," +       //Five-seveN
            "\nbecause I'll have you fall in love   \nwith me soon enough.",
            "Nice to meet you, Commander. RO635 is  \non standby, awaiting your orders.",       //RO635
            "IWS2000 (Steyr 2000) reporting,        \nCommander, let me become your" +          //IWS2000
            "\nstrength!",
            "Shotgun M1887, glad to see you here,   \nSir. This is my luggage, please help" +   //M1887
            "\nme.",
            "Shotgun KSG, join echelon. Commander,  \nwhere are the enemies Im suppose to" +    //KSG
            "\ndestroy?",
            "I am Izhmash Saiga-12. Allow me to     \nclean up any trash we come across on" +   //Saiga-12
            "\nour path.",
            "Hello, Commander, I'm AA-12. Pleased   \nto meet... Blech! Trying to act all" +    //AA-12
            "\nproper is making me sick.",
            "Ah, I'm sorry... you must be the new   \nCommander. I almost arrested you" +       //FP-6
            "\nbecause of how suspicious you seemed.",
            "So... You are that officer they        \nrumoured. This is CZ75, hope you have" +  //CZ75
            "\nsomething to keep me busy with.",
            "Hello! I'm RFB! Let us begin the game  \nfull of challenges right now!",           //RFB
            "Let me tell you some good news,        \nofficer... you have obtained the" +       //PKP
            "\ntrump card of victory.",
            "Ehehen~ Hello Commander! I'm ART55——   \nb-bit my tongue... 556... (sigh)",        //ART556
            "DSR-50, Commander... This is a name    \nyou will be whispering even in your" +    //DSR-50
            "\ndreams...",
            "Greetings Commander! I am T91,         \nwilling to give it my all for your" +     //T91
            "\nduties!",
            "Every round I fire guarantees a 99%    \nchance of victory. The remaining 1%" +    //Contender
            "\nwill require your miracle, Commander.",
            "We've finally met, Commander! I'm      \nfully prepared to fight alongside" +      //S.A.T.8
            "\nyou, are you prepared as well?",
            "I remember that it is this way.....    \n(sigh) You are the commander? You are" +  //JS05
            "\nactually much...... Ah! No,          \nnothing......",
            "K2 has arrived! Where are my cute and  \nlovely juniors? They must be dying to" +  //K2
            "\nsee me!",
            "Commander... Yes, just as it says on   \nthe file, I am Zas M21. I hope you" +     //Zas M21
            "\nwon't mind my performance.",
            "Carcano M1891 Reporting in! Finally    \nget to meet you Commander, your" +        //Carcano M1891
            "\ndreams and your justices, we will    \nwitness them, together.",
            "Hello, Commander. As you can plainly   \nsee, I am a bright, cheerful doll. I" +   //Carcano M91/38
            "\nhope we can get along well.",
            "Ballista, joining your echelons from   \nnow on... Where are you looking at?" +    //Ballista
            "\nThe combat situation is tight right  \nnow, please focus.",
            "Hello, Commander. I, AN-94, will be    \nunder your command from now on .. " +     //AN-94
            "Um... I want to ask... No, never       \nmind...",
            "Hmm... a New Commander? How long will  \nyou pique my interest, we shall see ~",   //AK-12
            "Phew... Big sis, I'm here at last...   \nCommander, I'm sorry to trouble you," +   //HK21
            "\nbut please take care of me from now  \non.",
            "Greetings, are you my Commander?... I  \nsee, you scored a passing grade with" +   //SRS
            "\nthe impressions, let's get along.",
            "You have actually found me... Are you  \njust doing this on a whim? If you" +      //CMS
            "\nwant to convince me, you have to be a\ngood " + '"subordinate"' + "ok?",
            "My name is ADS, amphibious assault     \nrifle. You better remember my name," +    //ADS
            "\ngot it? Whether it's on land or      \nunderwater, please remember to let me" +
            "\nlead the assault!",
            "Oh my? You're the Commander! You're    \nfamous on the Griffon Anonymous" +        //MDR
            "\nMessage Board! Can I take a picture  \nof you to upload on there later?",
            "Commander, being here means that I'll  \nbe able to take on all sorts of" +        //TAC-50
            "\nmissions, right? Huhu, I can't wait.",
            "Woah~ This is your uniform? Such an    \neye catching, magnificent shade of" +     //PM-06
            "\nred! Looks like we'll get along      \nnicely!",
            "Type 100 (Sakura) standing at          \nattention. Commander, from today" +       //Type 100
            "\nonwards, please teach me well.",
            "Oh... You're the Commander? If all     \nthe idiots on the highway drives like" +  //M870
            "\nyou, I'd rather die in a car crash~",
            "M82A1... This is my current name       \nCommander, I'm a T-doll who belongs" +    //M82A1
            "\nonly to you, everything is under your\n" + '"guidance"' + ".",
            "Are you the master around here? Ah,    \npardon me. Would " + '"Commander"' + " be more" + //Px4 Storm
            "\nappropriate? Then let us work        \ntogether from now on.",
            "Commander, this is my first            \nsuggestion to you - please make sure" +   //JS 9
            "\nthe work you give me is within my    \nabilities to accomplish. Thank you.",
            "Let's see who this is-- Commander of   \nG&K! I'm K11, the emergency" +            //K11
            "\nencounters specialist, please allow  \nme to show you my talents!",
            "QJY-88 General Purpose Machine Gun     \nreporting, Commander. You... don't" +     //Type 88
            "\nhave anything scary here, right?",
            "(On her phone) Aiya, the Commander's   \nhere to get me, I'll talk to you" +       //P22
            "\nlater—— Hello Commander, I'm P22,    \nis there anything you need help with?",
            "A completely new and strange           \nenvironment, huh… Well, if I'm here" +    //Howa Type 64
            "\nthen I'm here. I'll do my utmost best\nto adapt. Please teach me well," +
            "\nCommander.",
            "Eh? I was only following where other   \ndolls were going, so how did I end up" +  //P90
            "\nhere? …Uhm, hello! Do you know what  \nthis place is?",
            "So, this is the Commander's heart      \nrate... Mm, I'll remember it. I will" +   //HS2000
            "\nappreciate any advice you can give   \nme.",
            "Good, Commander, we finally meet. X95  \nwill serve you willingly... no, not" +    //X95
            "\njust you, I will give my everything  \nto serve everyone from now on.",
            "Awesome~ You seem like a nice person,  \nCommander! I am Lewis, please take" +     //Lewis Gun
            "\ncare of me!",
            "Hello, Commander, I am M200. I hope I  \ncan be of some help to you with my" +     //M200
            "\nknowledge… No, I'm not an expert at  \nall. I just hope to help, that's" +
            "\nall...",
            "Hah, so you're my new Commander? I'm   \nMinebea PM-9 Submachine gun, you" +       //PM-9
            "\nbetter remember my name!",
            "Hi, Commander! PA-15 Reporting, You    \nwill give me the most exciting" +         //PA-15
            "\nmissions, right?",
            "Hello, Commander! QBU-88 sniper rifle  \nreporting for duty!... Why is it such" +  //QBU-88
            "\na mess around here? Don't worry      \nthough, I'll help you clean it all" +
            "\nup.",
            "MG36, reporting. A new base, huh... I  \nhope you're not the type of Commander" +  //MG36
            "\nthat needs to know everything about  \ntheir subordinates' past.",
            "Hello Commander! Blaser R93            \nreporting! Hehe, a complete victory" +    //R93
            "\nis guaranteed as long as I'm         \ninvolved! If you don't believe me" +
            "\nthen... Do you want to make a bet?",
            "Producer!... No, I should call you" + '\n"Commander"' + ", right? Hello, Desert" + //Desert Eagle
            "\nEagle is joining your performance    \nteam, I'll be in your care from now" +
            "\non.",
            "Bushmaster ACR, reporting for duty. I  \nwill document all events and topics" +    //ACR
            "\nof discussion without fail.",
            "Greetings, Commander. Kord reporting   \nin. Ahh... it's kind of hot here...",     //Kord
            "HK CAWS, at your service. No need for  \nany particular ceremonies... You" +       //CAWS
            "\nprovide the funds, I'll get to work.",
            "DP-12, here to provide full            \nprotection from body to soul." +          //DP-12
            "\nCommander... would you like to hear  \nthe story behind this name?",
            "Ta-daaah ~ Borchardt C-93, reporting!  \nOhhh— I know you, you're famous!" +       //C-93
            "\nHehe, there ought to be a lot of     \nchances for me to make a name for" +
            "\nmyself here...",
            "Greetings! This is SIG556, beacon of   \ntrendiness! Are you surprised by this" +  //SIG556
            "\noutfit of mine? Well, that's because \nthe most recent style keyword is" + 
            '\n"Crazy Abstinence!"' + ".",
            "Remington R5... I was created with     \nhigh expectations. As for whether I" +    //R5
            "\ndeserve them, you'll have to see what\nI'm worth with your own eyes.",
            "Tadaaah! Type 89 assault rifle has     \narrived! Um, Commander, is Type 64" +     //Howa Type 89
            "\naround by any chance?",
            "We meet again, Commander, as I said    \nwe would. Like the fate of a moth" +      //RPK-16
            "\ndarting into flame... what a strange metaphor? Is that so?",
            "My regards, Commander. I am AK-15,     \nactive tactical doll, please deliver" +   //AK-15
            "\nyour orders to me more efficiently.",
            "I am Webley. I've been expecting you   \nfor a long time now. Please show me" +    //Webley
            "\nto the dormitories, as I have a lot  \nof luggage to unpack.",
            "Ooh! Nice to meet ya, Commander! You   \nlook like an interesting person.",        //SL8
            "Nice to meet you, this is the HP-35.   \nThe wind is comfortable today. Would" +   //HP-35
            "\nyou like to go cycling with us before\nwork?",
            "I'm AK-Alfa, not Omega... Excuse me,   \nbut which way is your planetarium?",      //AK-Alfa
            "So this is Griffin?... Understood,     \nthen please look forward to my" +         //ZB-26
            "\nperformance. I will do my best no    \nmatter where I am.",
            "Commander! You seem to be in good      \nshape. Wanna play soccer together?" +     //Lusa
            "\nAh, I forgot to say, when we first   \nmet that I was Lusa! Lusa playing" +
            "\nsoccer!",
            "VSK-94, reporting. Are you my new      \nboss? Please advise.",                    //VSK-94
            "So you've finally arrived? You are     \nthe first human ever to keep me" +        //Steyr ACR
            "\nwaiting like this.",
            "Starting today I will be working       \nunder Griffin. I'm AUG Para, pleased" +   //AUG Para
            "\nto make your acquaintance, senpai. By\nthe way, is it allowed to bring pet" +
            "\nto work here?",
            "Commander, a pleasure to meet you. My  \nname is General Liu rifle, produced" +    //General Liu
            "\nby Liu Qing En. Um... yes. That's    \nabout it for the time being. Sorry.",
            "Ah, I was deep in thought. It seems    \nyou've finally arrived. I'm VHS. Use" +   //VHS
            "\nme as you see fit.",
            "LTLX 7000 here, a pleasure to meet     \nyou. Commander, I hope you are a" +       //LTLX 7000
            "\nreliable person.",
            "N/A",                                                                              //M6 ASW
            "We meet at last, Commander. Leave the  \nrear position to this Chukavin. No" +     //SVCh
            "\none will be able to escape from      \nthese eyes.",
            "Standing in front of you is the        \nfascinating Kolibri -- your most" +       //Kolibri
            "\nreliable bodyguard and companion     \nhenceforth!",
            "VP1915 Villar Perosa, reporting. Are   \nyou to be my commander? Do enlighten" +   //VP1915
            "\nme, and please call me Perosa.",
            "Hello, Commander. I'm Savage, a        \nGriffin sniper... While I'm not" +        //Savage
            "\nwearing white nor am I a ghost,      \nplease believe me when I say that" +
            "\nwill be the guiding star of tomorrow.",
            "N/A",                                                                              //De Lisle
            "N/A",                                                                              //SIG MCX
            "N/A",                                                                              //RPK-203
            "N/A",                                                                              //TKB-408

            //index 334-356, event dolls
            "I have to keep moving forward. So,     \nstep aside for me, will you?",            //Noel
            "Girls have to be on the battlefield    \nknown as " + '"Love"' + " all the time, please" + //Ephelt
            "\ndon't underestimate how many battles \nwe fought!",
            "I'm just a student girl that happen    \nto by pass here. Kiana Kaslana, don't" +  //Kiana
            "\nuse my name without permission ok!",
            "Hey there Kiddo... Nice to meet ya,    \nmy name is Mei... Raiden Mei.",           //Raiden Mei
            "Bronya Zaychik... Activating. Loading  \nValkyrja systems...",                     //Bronya
            "I am the Head master of St Freya       \nAcademy -- Theresa Apocalypse, don't" +   //Theresa
            "\nmistake me for just a kid!",
            "...You will be the one commanding me?  \nHmm, it appears I, Murata Himeko," +      //Murata Himeko
            "\nhave been underestimated.",
            "He...Hello, nice to meet you. My       \nname... is Seele Vollerei",               //Seele
            "Do you feel the shines? Do point       \nrejecting it anymore, reach out for" +    //Clear
            "\nit! This is Glory Light you always   \ncraved for!",
            "Heheh... Are bad girls welcome in a    \nplace like this? Then let me show you" +  //Fail
            "\nthe light shining from deep within   \nchaos!",
            "Hey, call me Jill, Boss... You know    \nwhat, can I just call you Commander?",    //Jill
            "Master Specialist, Sei P. Asagiri of   \nthe 765th Division Valkyrie Corps, at" +  //Sei
            "\nyour service!",
            "I'm Dorothy, the cutest of them all.   \nEverybody needs me, and Dorothy" +        //Dorothy
            "\nbelongs to everybody!",
            "Stella Hoshii, my name. If the self-   \nintroductions are over, make me" +        //Stella
            "\nsomething to wake me up before we get\non with work.",
            "How are you, Griffin Commander, I am   \nAlma. Heh, so they weren't kidding" +     //Alma
            "\nabout this self-introduction         \nbusiness~",
            "Just call me Dana, Commander. I don't  \nquite understand your work, but let" +    //Dana
            "\nme know if I can help out in any way.",
            "N/A",                                                                              //Henrietta
            "N/A",                                                                              //Rico
            "N/A",                                                                              //Triela
            "N/A",                                                                              //Claes
            "N/A",                                                                              //Angelica
            "Agent of the Strategic Homeland        \nDivision, code name Vector... Given" +    //Agent Vector
            "\nthe current situation, we must step  \nforward. I, too, will make a stand" +
            "\nwhen there is danger.",
            "N/A"                                                                               //Agent 416
        ];

        //all dolls with mod 3 in array
        const dollMod3List = [
            //2* dolls with mod3
            "M1911", "Nagant Revolver", "Beretta Model 38", "FN-49", "G3", "Galil", "LWMMG",
            "MP-446", "IDW", "Type 64",
            //3* dolls with mod3
            "Makarov", "C96", "Sten MkII", "Micro Uzi", "M14", "SV-98", "StG44", "Bren",
            "Hanyang Type 88", "Super SASS", "M1897", "M500", "RMB-93", "GSh-18", "F1",
            "Type 56",
            //4* dolls with mod3
            "Colt Revolver", "Stechkin", "MP5", "Mosin-Nagant", "M4A1", "M4 SOPMOD II",
            "ST AR-15", "AS Val", "G36", "M1918", "UMP9", "UMP45", "PP-19", "Type 97 Shotgun",
            "XM3", "KSVK", "Type 80",
            //5* dolls with mod3
            "NTW-20", "HK416", "M950A", "G11", "MG4", "RO635", "Welrod MkII"
        ];

        //all mod3 dolls images in array
        const dollMod3ImageList = [
            //2* dolls
            "KOax7Sj", "g55pmZc", "Rs2K8n5", "RpNPayu", "1n1iize", "j4aMNhk", "z7I248h",
            "utGDELw", "m183MJJ", "R2x3ViV",
            //3* dolls
            "qiSKI7w", "xNqaMFd", "nOtKKee", "veIrThg", "bYk4JjB", "PnHlNDf", "SF5PdJp",
            "iRqRWot", "Js6IwbE", "nuTwhG2", "yMoZDqf", "9tAOiua", "1pT8ad7", "jkv7mk9",
            "tUBlKYG", "KzRzLqF",
            //4* dolls
            "6SAffAa", "HOyYzbN", "Nw4eyw7", "jhSTx70", "LtlWOpr", "eum65bk", "815Vfnp",
            "wWz5K2g", "PpmocLl", "eqwDXLw", "PXsTcAh", "faU6eiW", "iTI7aQu", "K5b3vpw",
            "KbbGoR5", "NVVM3oL", "177Cj3L",
            //5* dolls
            "BG6ASfR", "Wnq4WDs", "XMdZjrf", "y9OeQQX", "eEfq6w4", "uFyAJ4y", "lF2ClkT"
        ];

        //all mod3 doll acquisition quotes in array
        const dollMod3QuoteList = [
            //2* dolls
            "This is certainly a fated resumption.  \nHow is it, commander. Do you dig my" +    //M1911
            "\n current appearance?",
            "N/A",                                                                              //Nagant Revolver
            "Beretta M38 is back now. From now on,  \nI will do my best for you.",              //Beretta M38
            "Commander, the current me... how do I  \nlook? As expected, this is a little" +    //FN-49
            "\nembarrassing.",
            "Commander, I've been renewed. Please   \ncall me with the name I use until" +      //G3
            "\nnow.",
            "N/A",                                                                              //Galil
            "If I've improved myself this much,     \nI'll become less of a burden for" +       //LWMMG
            "\neveryone... Thank goodness.",
            "What's wrong? I'm a " + '"Viking"' + ". You can\ntell immediately by looking at this" +    //MP-446
            "\nmuffler.",
            "N/A",                                                                              //IDW
            "Type 64, joining in! Commander, I'm    \nexpecting to do mission together" +       //Type 64
            "\nagain.",

            //3* dolls
            "N/A",                                                                              //Makarov
            "Commander, take a look! It's cleaner   \nthan before, isn't it?",                  //C96
            "Commander, am I ... at full capacity   \nnow? Please continue to watch over" +     //Sten Mk!!
            "\nme!",
            "Stop spacing out. I didn't get         \nupgraded just to get stared at! Give" +   //Micro Uzi
            "\nme some work to do, I'll take care of\nit!",
            "Commander, Haven't we matured a        \nlittle? I feel like we can now" +         //M14
            "\naccomplish anything!",
            "Commander, I've updated my image and   \nmy calculating capabilities! I'll be" +   //SV-98
            "\nsure to bring you some more          \nvictories. Hey now, don't just stare." +
            "\nLet's get to work right away!",
            "Commander, how's my look now? Umm ...  \nlet's shake hand properly this time.",    //StG44
            "The current me has obtained a brand    \nnew strength. Commander, order me by" +   //Bren
            "\nall your means.",
            "Greetings, master. Starting today,     \nI'll provide a brand new service.",       //Hanyang Type 88
            "N/A",                                                                              //Super SASS
            "N/A",                                                                              //M1897
            "N/A",                                                                              //M500
            "N/A",                                                                              //RMB-93
            "N/A",                                                                              //GSh-18
            "N/A",                                                                              //F1
            "N/A",                                                                              //Type 56

            //4* dolls
            "Heh heh. Commander, Right now, my      \npower have increased by 200%! The" +      //Colt Revolver
            "\nrest 800%, please use cola to fill it\nup!",
            "N/A",                                                                              //Stechkin
            "I'm no longer a child. So the          \ncommander can rely more on me!",          //MP5
            "Comrade Commander, хорошо! Allow me    \nto be everyone's strength.",              //Mosin-Nagant
            "Commander, please take care of me      \nfrom now on.",                            //M4A1
            "Uwaa~ Commander, look, look! Do you    \nstill recognize me?",                     //M4 SOPMOD II
            "Is this ... my power now? Commander,   \ncan't this meet your expectations?",      //ST AR-15
            "I will no longer regret over the past  \nCommander, from now on, I will show" +    //AS Val
            "\nyou my courage, for Teddy too.",
            "Commander, The services I provide      \nhave all undergone upgrades. Please" +    //G36
            "\nuse them as you see fit.",
            "Commander, these tasks cannot be       \ncarelessly done. As for how I have" +     //M1918
            "\nchanged, please watch carefully.",
            "I'm back, Commander! We're family      \nafter all, we won't be so easily" +       //UMP9
            "\nseparated!",
            "Let's get to know each other all over  \nagain, Commander ... while I still" +     //UMP45
            "\nfeel that this world can be saved.",
            "PP19 reporting in! Are you the         \nCommander? Please do well to remember" +  //PP-19
            "\nme.",
            "N/A",                                                                              //Type 97 Shotgun
            "N/A",                                                                              //XM3
            "Long time no see, Fate's Chosen        \nCommander. These brand new eyes shalt" +  //KSVK
            "\nbear witness to thy journey once     \nmore!",
            "N/A",                                                                              //Type 80

            //5* dolls
            "Denel NTW-20, ready. Follow the        \ninstructions below.",                     //NTW-20
            "Compared to before? Not much           \ndifferent. After all, exceeding" +        //HK416
            "\nperfection is still perfection.",
            "M950A, returning to Griffin with a     \nnew attitude. Commander, allow me to" +   //M950A
            "\nprotect you from now on.",
            "N/A",                                                                              //G11
            "N/A",                                                                              //MG4
            "Long time no see, Commander. This new  \nme should surely solve more of your" +    //RO635
            "\nproblems. Your orders, please.",
            "N/A"                                                                               //Welrod MkII
        ];

//DEBUGGING PURPOSES ONLY
/*
        //create debug embed
        const dollDebugEmbed = new Discord.MessageEmbed();
        dollDebugEmbed.setColor("#2f3136");
        dollDebugEmbed.setTitle("Debug Menu");
        //send all number of indexes of all arrays
        dollDebugEmbed.addFields
        (
            {name: "Number of dolls (non-mod)", value: (dollNameList.length - 1)},
            {name: "Number of images (non-mod)", value: (dollImageList.length - 1)},
            {name: "Number of acquisition quotes (non-mod)", value: (dollQuoteList.length - 1)},
            {name: "Number of dolls (mod)", value: dollMod3List.length},
            {name: "Number of images (mod)", value: dollMod3ImageList.length},
            {name: "Number of acquisition quotes (mod)", value: dollMod3QuoteList.length}
        )
        //check for any repetition in both images arrays
        for(let debugModIndex = 0; debugModIndex < dollMod3ImageList.length; debugModIndex++)
        {
            for(let debugNonModIndex = 1; debugNonModIndex < dollImageList.length; debugNonModIndex++)
            {
                if(dollMod3ImageList[debugModIndex] == dollImageList[debugNonModIndex])
                {
                    dollDebugEmbed.addField("Image Repetition", debugModIndex + ", " + debugNonModIndex);
                }
            }
        }
        //send debug embed
        dollMsg.channel.send(dollDebugEmbed);
*/

        //RNG for doll rarity
        dollRarityRNG = Math.floor((Math.random() * 100) + 1);

        //roll 2* doll if dollRarityRNG is 1-45
        if(dollRarityRNG > 0 && dollRarityRNG <= 45)
        {
            dollEmbedColour = "#fcfcfc";
            dollIndex = Math.floor((Math.random() * 33) + 1);
        }

        //roll 3* doll if dollRarityRNG is 46-80
        if(dollRarityRNG > 45 && dollRarityRNG <= 80)
        {
            dollEmbedColour = "#6bdfce";
            dollIndex = Math.floor((Math.random() * 98) + 1) + 33;
        }

        //roll 4* doll if dollRarityRNG is 81-94
        if(dollRarityRNG > 80 && dollRarityRNG <= 94)
        {
            dollEmbedColour = "#d6e35a";
            dollIndex = Math.floor((Math.random() * 91) + 1) + 131;
        }

        //roll 5* doll if dollRarityRNG is 95-99
        if(dollRarityRNG > 94 && dollRarityRNG <= 99)
        {
            dollEmbedColour = "#ffb600";
            dollIndex = Math.floor((Math.random() * 111) + 1) + 222;
        }

        //roll event doll if dollRarityRNG is 100
        if(dollRarityRNG === 100)
        {
            dollEmbedColour = "#dfb6ff";
            dollIndex = Math.floor((Math.random() * 23) + 1) + 333;
        }

        //assign doll name
        dollName = dollNameList[dollIndex];

        //assign doll image
        dollImageLink = "https://i.imgur.com/" + dollImageList[dollIndex] + ".png";

        //assign doll acquisition quote
        dollQuote = dollQuoteList[dollIndex];

        //assign modFlag = 0
        modFlag = 0;
        
        //check for mod3 availability
        for(let dollMod3Index = 0; dollMod3Index < dollMod3List.length; dollMod3Index++)
        {
            if(dollName == dollMod3List[dollMod3Index])
            {
                //RNG to get mod3 variant
                modRNG = Math.floor((Math.random() * 5) + 1);

                //if mod3 variant is rolled (40% chance)
                if(modRNG > 3)
                {
                    //change modFlag value
                    modFlag = 1;
                    //save index for mod3 variant
                    modIndex = dollMod3Index;
                }
            }
        }

        //if doll rolled is a mod 3 variant statement
        if(modFlag == 1)
        {
            //change embed colour for 2* & 3*
            if(dollRarityRNG > 0 && dollRarityRNG <= 80)
            {
                dollEmbedColour = "#d6e35a";
            }

            //change embed colour for 4*
            else if(dollRarityRNG > 80 && dollRarityRNG <= 94)
            {
                dollEmbedColour = "#ffb600";
            }

            //change embed colour for 5*
            else if(dollRarityRNG > 94 && dollRarityRNG <= 99)
            {
                dollEmbedColour = "#ad4129";
            }

            //add mod 3 at the back of the name
            dollName = dollName + " MOD 3";
            
            //retrieve mod 3 picture
            dollImageLink = "https://i.imgur.com/" + dollMod3ImageList[modIndex] + ".png";

            //retrieve mod 3 acquisition quote
            dollQuote = dollMod3QuoteList[modIndex];
        }

        //create embed
        const dollEmbed = new Discord.MessageEmbed();
        dollEmbed.setColor(dollEmbedColour);
        dollEmbed.setTitle(dollMsg.member.user.tag);
        dollEmbed.setDescription("You have rolled " + dollName + "!");
        dollEmbed.setImage(dollImageLink);
        dollEmbed.setFooter(dollQuote);

        //send embed
        dollMsg.channel.send(dollEmbed);
    }
}