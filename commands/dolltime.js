//initialise discord.js
const Discord = require("discord.js");

//initialise pagination
const dolltimePagination = require("discord.js-pagination");

module.exports = {
    name: "dolltime",

    //execute command
    execute(dolltimeMsg, args, timer)
    {
        //set all index values to -1
        doll1 = -1;
        doll2 = -1;
        doll3 = -1;
        doll4 = -1;
        doll5 = -1;

        //set array for all possible timer
        const dollTime_1 = [
            "0:20", "0:22", "0:25", "0:28", "0:30", "0:35", "0:40", "0:45", "0:49", "0:50",
            "0:52", "0:53", "0:54", "0:55", "1:00", "1:02", "1:04", "1:05", "1:09", "1:10",
            "1:15", "1:20", "1:25", "1:30", "1:35", "1:40", "1:50", "2:00", "2:05", "2:10",
            "2:15", "2:16", "2:18", "2:19", "2:20", "2:25", "2:28", "2:29", "2:30", "2:33",
            "2:35", "2:40", "2:45", "2:50", "3:00", "3:10", "3:15", "3:20", "3:25", "3:30",
            "3:35", "3:40", "3:45", "3:48", "3:50", "3:52", "3:53", "3:55", "3:56", "3:58",
            "4:00", "4:04", "4:05", "4:06", "4:08", "4:09", "4:10", "4:11", "4:12", "4:15",
            "4:20", "4:25", "4:30", "4:32", "4:38", "4:40", "4:42", "4:43", "4:45", "4:47",
            "4:48", "4:50", "4:52", "4:55", "5:00", "5:10", "5:20", "5:40", "5:50", "6:10",
            "6:15", "6:16", "6:20", "6:25", "6:26", "6:28", "6:30", "6:35", "6:36", "6:40",
            "6:45", "6:50", "7:11", "7:14", "7:15", "7:20", "7:25", "7:30", "7:40", "7:45",
            "7:50", "7:55", "7:56", "8:00", "8:05", "8:06", "8:08", "8:10", "8:12", "8:13",
            "8:15", "8:17"
        ];

        //set array for doll 1 names
        const dollName_1 = [
            "M1911", "PPK", "FNP-9", "USP Compact", "C96", "P99", "Astra Revolver",
            "Tokarev", "Jericho", "Colt Revolver", "Spitfire", "K5", "Rex Zero 1",
            "Stechkin", "Welrod MkII", "Contender", "Px4 Storm", "M950A", "C-93",
            "Grizzly MkV", "PA-15", "m45", "Type 64", "Beretta Model 38", "HP-35",
            "Sten MkII", "F1", "MAC-10", "Z-62", "SAF", "UMP9", "AR-57", "MP7", "Type 100",
            "MP5", "Suomi", "C-MS", "P90", "G36C", "SR-3MP", "Type 79", "Galil", "F2000",
            "G3", "StG44", "OTs-12", "ARX-160", "AK-47", "Type56-1", "AS Val", "9A-91",
            "G36", "FAL", "T91", "Type 95", "K2", "MDR", "HK416", "SIG-556", "RFB",
            "M1 Garand", "G11", "G41", "Howa Type 64", "Howa Type 89", "AN-94",
            "Mosin-Nagant", "K-11", "AK-12", "AK-15", "PSG-1", "Springfield", "PTRD",
            "M200", "Carcano M1891", "Kar98k", "Carcano M91/38", "VSK-94", "NTW-20", "SVCh",
            "QBU-88", "WA2000", "IWS 2000", "M99", "Lee-Enfield", "LWMMG", "Bren",
            "M1919A4", "MG42", "M60", "Type 80", "RPK-16", "Mk48", "M1918", "ZB-26",
            "Type 88", "PK", "Negev", "MG36", "MG4", "MG5", "PKP", "V-PM5", "M1014",
            "NS2000", "M500", "KS-23", "RMB-93", "M590", "M37", "Super-Shorty", "USAS-12",
            "HK512", "KSG", "Saiga-12", "FP-6", "M6 ASW", "S.A.T.8", "AA-12", "DP-12",
            "CAWS", "LTLX 7000"
        ];

        //set array for doll 1 image
        const dollImage_1 = [
            "TDyg0eI", "afMv3xN", "JNcB8cP", "zcAmeLh", "fxzKvaM", "Yoh7Lxj", "s4bftWf",
            "EEdwTwq", "dZWAXL2", "ZIYFcG5", "P1QTOwo", "LLVSOYI", "uw3hvFK", "kUX8U5T",
            "TRFoOns", "3wg0BQu", "PQhD8Nq", "nCPkTlj", "UfRl9XB", "qLMPc46", "QwtRx4R",
            "u3lxGD2", "E8IahQP", "ShJHrvM", "To4QKXu", "abj6KYJ", "NDqeeLm", "DPTATGq",
            "zWv3x9M", "0TpYvHK", "tOcNMa1", "9MWoY63", "2r0tIt2", "vcUeQZN", "bnN8IYw",
            "8DeYvyu", "mHUgmGC", "Cx9DK7T", "VdXxuN5", "axGowSg", "qPUzr3k", "6uRByuo",
            "O7UNuhz", "kV7oRYW", "1HcDGz8", "x9H7aIw", "Q5P4VcV", "VdZlhRl", "GZ0oB88",
            "y1cKcRO", "g8ARnW7", "wCVFKUX", "VzDKguQ", "n3IQKL1", "JC3hmnN", "Rxd6QA4",
            "jKybwtm", "umNI9Sl", "JLfbfQZ", "NxbbYDe", "BP1FvQD", "dzZ1F1z", "xGPy0Be",
            "RdSWMdS", "v730t2n", "lkwl8A6", "nviQzQ4", "lUuErfu", "lzsOpGc", "sXFCCp2",
            "OjtwTqf", "1GhErHe", "0qTcq02", "S36YpBW", "zNboCiW", "Ium7Q9L", "sbCRIDy",
            "LKCpLc7", "XqC1fun", "A23sV7f", "8Mlbt0z", "G9WMcdD", "2YCbtM0", "2c8EICG",
            "OQMmthJ", "WNQF7Nf", "deyHcgZ", "zlBKp7A", "cuSWQ24", "gHcUtkD", "3np2vWg",
            "Bhg0p9s", "GAzq0Z6", "KKVLEvs", "9ItsVTD", "nvo97PW", "IrEroWK", "rDWWLQU",
            "TQJdbde", "KciVfjU", "GfIOhbN", "jtoGBag", "cDRhGgK", "RsRtxSU", "tNADyR7",
            "qQ4GTl5", "09Sth3C", "oHDJ0fb", "zpTVM8D", "9qJWZJX", "aJBbCAB", "UATQzxj",
            "JVmhbzW", "QWT1Lvg", "ds9CbtU", "7QzPTaY", "h8m3Mrr", "q12Ofnt", "53WX8Mt",
            "mqEsi8I", "SuT6i3w", "MbHbizr"
        ];

        //set array for doll 1 rarity
        const dollRarity_1 = [
            2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 5, 3, 3,
            3, 3, 4, 4, 4, 5, 5, 4, 5, 5, 5, 5, 5, 5, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5,
            5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 4, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 2, 3, 3, 3, 4, 4, 5, 4, 4, 5, 5, 4, 5, 5, 5, 5, 5, 4, 4, 3, 3, 3, 3,
            4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5
        ];

        //set array for doll 1 class
        const dollClass_1 = [
            "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG",
            "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "SMG", "SMG", "SMG", "HG",
            "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG",
            "SMG", "SMG", "SMG", "SMG", "SMG", "AR", "AR", "AR", "AR", "AR", "AR", "AR",
            "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "RF",
            "AR", "AR", "AR", "AR", "AR", "RF", "AR", "AR", "AR", "RF", "RF", "RF", "RF",
            "RF", "RF", "RF", "RF", "RF", "RF", "RF", "RF", "RF", "RF", "RF", "MG", "MG",
            "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG", "MG",
            "MG", "MG", "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG",
            "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG", "SG"
        ];

        //set array for timers with at least 2 possible dolls
        const dollTime_2 = [
            "0:20", "0:25", "0:28", "0:30", "0:35", "0:40", "0:50", "0:55", "1:05", "1:10",
            "1:20", "1:30", "1:40", "1:50", "2:00", "2:10", "2:15", "2:18", "2:20", "2:30",
            "2:35", "2:40", "2:45", "2:50", "3:10", "3:20", "3:25", "3:30", "3:35", "3:40",
            "3:50", "3:55", "3:56", "4:04", "4:05", "4:08", "4:10", "4:15", "4:20", "4:25",
            "4:30", "4:50", "5:00", "6:10", "6:16", "6:20", "6:25", "6:30", "7:30", "7:40",
            "7:45"
        ];

        //set array for doll 2 names
        const dollName_2 = [
            "Nagant Revolver", "MP-446", "Bren Ten", "P08", "Type 92", "M9", "Mk23", "P7",
            "NZ75", "IDW", "Spectre M4", "M3", "Micro Uzi", "PPSh-41", "Skorpion", "PPD-40",
            "UMP45", "Shipka", "PP-90", "Thompson", "Vector", "SIG-510", "Type 63", "L85A1",
            "G43", "FNC", "XM8", "FAMAS", "EM-2", "Ribeyrolles", "Type 97", "ADS",
            "AK-Alfa", "Type 4", "Zas M21", "Steyc ACR", "T-5000", "SVD", "G28", "Tabuk",
            "PzB39", "AAT-52", "De Lisle", "M2HB", "RPK-203", "AEK-999", "Ameli", "MG3",
            "M1897", "SPAS-12", "Liberator"
        ];

        //set array for doll 2 image
        const dollImage_2 = [
            "I66WR6J", "V5chwyI", "iv07Ab2", "1jUeQxd", "qP1fmH6", "ScK4LCV", "iBbREH4",
            "RYR9vuT", "pLHqNkH", "GRC4rfg", "5GBmmjs", "8CZURbO", "aUmORw7", "NZh6hbn",
            "iIRqjtc", "uYo9UdF", "5tEZfDS", "6OpbN0O", "fCMwLrB", "Temn99X", "ULfun3d",
            "YxHpTXI", "eJpYUf6", "SzpsXyr", "diO4aWf", "hIKDgQR", "SLAADvX", "1Uhszjw",
            "u0f0Y1i", "gri7d4x", "THPmujy", "UH8KHGL", "QW9BgSL", "c8L6UKG", "cGXYxmz",
            "MQ7w0qa", "dVCicaH", "UPmfLXb", "7lXNRAo", "9m3W4Ln", "qqgKprR", "aKAGNDX",
            "v655DrX", "PzX80hY", "UaemUoi", "ggUV6Rv", "wiFXMXi", "8Wz92iK", "QxtCFtc",
            "ankZg4z", "pCFYI8q"
        ];

        //set array for doll 2 rarity
        const dollRarity_2 = [
            2, 2, 2, 3, 3, 3, 4, 4, 5, 2, 2, 2, 3, 2, 3, 4, 4, 4, 4, 5, 5, 2, 2, 2, 2, 3, 4,
            4, 4, 4, 5, 5, 5, 4, 5, 5, 4, 4, 4, 4, 4, 2, 5, 3, 5, 4, 4, 4, 3, 4, 4
        ];

        //set array for doll 2 class
        const dollClass_2 = [
            "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "HG", "SMG", "SMG", "SMG",
            "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "SMG", "AR", "AR", "AR",
            "RF", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "AR", "RF", "AR", "AR", "RF",
            "RF", "RF", "RF", "RF", "MG", "RF", "MG", "MG", "MG", "MG", "MG", "SG", "SG",
            "SG"
        ];

        //set array for timers with at least 3 possible dolls
        const dollTime_3 = [
            "0:20", "0:40", "0:50", "1:10", "1:30", "2:10", "2:18", "2:20", "3:10", "3:20",
            "3:25", "3:30", "3:35", "3:40", "3:50", "3:56", "4:15", "4:50", "5:00", "6:25"
        ];

        //set array for doll 3 names
        const dollName_3 = [
            "P38", "Makarov", "P30", "PP-2000", "MP40", "PPS-43", "PP-19-01", "KAC-PDW",
            "FN-49", "BM59", "SAR-21", "TAR-21", "CR-21", "FX-05", "Hanyang Type 88", 
            "SIG MCX", "SPR A3G", "FG42", "MG34", "Chauchat"
        ];

        //set array for doll 3 image
        const dollImage_3 = [
            "2FmN9kE", "1wrkZS8", "dW6jv2K", "3nABLKV", "G8qfaWj", "EeVq1z2", "E4kINtN",
            "4S02Vbb", "ZqJzT7M", "R7m9c9i", "eVHbUJC", "uWoyc2L", "3QFob5E", "dP72J2O",
            "wTJSA1I", "NtUW5M6", "3SGgiBB", "C4lDWNo", "mmdc3IH", "lliPhnD"
        ];

        //set array for doll 3 rarity
        const dollRarity_3 = [
            2, 3, 4, 2, 2, 3, 4, 4, 2, 2, 4, 4, 4, 4, 3, 5, 4, 2, 2, 4
        ];

        //set array for doll 3 class
        const dollClass_3 = [
            "HG", "HG", "HG", "SMG", "SMG", "SMG", "SMG", "SMG", "RF", "RF", "AR", "AR",
            "AR", "AR", "RF", "AR", "RF", "MG", "MG", "MG"
        ];

        //set array for timers with at least 4 possible dolls
        const dollTime_4 = [
            "3:30", "3:40", "3:50", "4:15", "5:00"
        ];

        //set array for doll 4 names
        const dollName_4 = [
            "SVT-38", "M14", "OTs-44", "K31", "DP28"
        ];

        //set array for doll 4 image
        const dollImage_4 = [
            "PKm1opR", "bYk4JjB", "7nWTxg0", "Y6Vrid2", "vAdIn3d"
        ];

        //set array for 4 rarity
        const dollRarity_4 = [
            2, 3, 3, 4, 2
        ];

        //set array for doll 4 class
        const dollClass_4 = [
            "RF", "RF", "RF", "RF", "MG"
        ];

        //set array for timers with at least 5 possible dolls
        const dollTime_5 = [
            "3:30", "3:40"
        ];

        //set array for doll 5 names
        const dollName_5 = [
            "SKS", "SV-98"
        ];

        //set array for doll 5 image
        const dollImage_5 = [
            "2VEuPnW", "nJSYgw1"
        ];

        //set array for doll 5 rarity
        const dollRarity_5 = [
            2, 3
        ];

        //set array for doll 5 class
        const dollClass_5 = [
            "RF", "RF"
        ];

        //set index of first possible doll
        for(i = 0; i <= dollTime_1.length; i++)
        {
            if(timer == dollTime_1[i])
            {
                doll1 = i;
            }
        }

        //set index of second possible doll
        for(i = 0; i <= dollTime_2.length; i++)
        {
            if(timer == dollTime_2[i])
            {
                doll2 = i;
            }
        }

        //set index of third possible doll
        for(i = 0; i <= dollTime_3.length; i++)
        {
            if(timer == dollTime_3[i])
            {
                doll3 = i;
            }
        }

        //set index of fourth possible doll
        for(i = 0; i <= dollTime_4.length; i++)
        {
            if(timer == dollTime_4[i])
            {
                doll4 = i;
            }
        }

        //set index of fifth possible doll
        for(i = 0; i <= dollTime_5.length; i++)
        {
            if(timer == dollTime_5[i])
            {
                doll5 = i;
            }
        }

        //if time given not valid, send error
        if(doll1 == -1){
            const noDoll = new Discord.MessageEmbed;
            noDoll.setColor("#2f3136");
            noDoll.setTitle(dolltimeMsg.member.user.tag);
            noDoll.setDescription("No doll found!");
            dolltimeMsg.channel.send(noDoll);
            return 0;
        }

        //set embed colour & star rarity
        switch(dollRarity_1[doll1])
        {
            case 2:
                colour_1 = "#fcfcfc";
                rarity_1 = ":star::star:";
                break;
            case 3:
                colour_1 = "#6bdfce";
                rarity_1 = ":star::star::star:";
                break;
            case 4:
                colour_1 = "#d6e35a";
                rarity_1 = ":star::star::star::star:";
                break;
            case 5:
                colour_1 = "#ffb600";
                rarity_1 = ":star::star::star::star::star:";
                break;
        }

        //create doll 1 imgur link
        dolltimeImageLink_1 = "https://i.imgur.com/" + dollImage_1[doll1] + ".png";

        //create embed first page
        const dolltimeEmbed_1 = new Discord.MessageEmbed;
        dolltimeEmbed_1.setColor(colour_1);
        dolltimeEmbed_1.setTitle(dolltimeMsg.member.user.tag);
        dolltimeEmbed_1.setImage(dolltimeImageLink_1);
        dolltimeEmbed_1.addFields(
            {name: "Name:", value: dollName_1[doll1]},
            {name: "Rarity:", value: rarity_1},
            {name: "Class:", value: dollClass_1[doll1]},
            {name: "Timer:", value: timer}
        );

        //send embed if only one doll in timer
        if(doll2 == -1)
        {
            dolltimeMsg.channel.send(dolltimeEmbed_1);
            return 0;
        }

        //if at least 2 dolls in timer, continue
        //set embed colour & star rarity
        switch(dollRarity_2[doll2])
        {
            case 2:
                colour_2 = "#fcfcfc";
                rarity_2 = ":star::star:";
                break;            
            case 3:
                colour_2 = "#6bdfce";
                rarity_2 = ":star::star::star:";
                break;
            case 4:
                colour_2 = "#d6e35a";
                rarity_2 = ":star::star::star::star:";
                break;
            case 5:
                colour_2 = "#ffb600";
                rarity_2 = ":star::star::star::star::star:";
                break;
        }
        //create doll 2 imgur link
        dolltimeImageLink_2 = "https://i.imgur.com/" + dollImage_2[doll2] + ".png";

        //create embed second page
        const dolltimeEmbed_2 = new Discord.MessageEmbed;
        dolltimeEmbed_2.setColor(colour_2);
        dolltimeEmbed_2.setTitle(dolltimeMsg.member.user.tag);
        dolltimeEmbed_2.setImage(dolltimeImageLink_2);
        dolltimeEmbed_2.addFields(
            {name: "Name:", value: dollName_2[doll2]},
            {name: "Rarity:", value: rarity_2},
            {name: "Class:", value: dollClass_2[doll2]},
            {name: "Timer:", value: timer}
        );

        //send embed if only two dolls in timer
        if(doll3 == -1)
        {
            //all pages in array
            const pages = [dolltimeEmbed_1, dolltimeEmbed_2];
            //reaction to change page
            const arrows = ["⬅️", "➡️"];
            //disable page changing after 20 seconds
            const time = "20000";
            //send pages
            dolltimePagination(dolltimeMsg, pages, arrows, time);
            return 0;
        }

        //if at least 3 dolls in timer, continue
        //set embed colour & star rarity
        switch(dollRarity_3[doll3])
        {
            case 2:
                colour_3 = "#fcfcfc";
                rarity_3 = ":star::star:";
                break;            
            case 3:
                colour_3 = "#6bdfce";
                rarity_3 = ":star::star::star:";
                break;
            case 4:
                colour_3 = "#d6e35a";
                rarity_3 = ":star::star::star::star:";
                break;
            case 5:
                colour_3 = "#ffb600";
                rarity_3 = ":star::star::star::star::star:";
                break;
        }
        //create doll 3 imgur link
        dolltimeImageLink_3 = "https://i.imgur.com/" + dollImage_3[doll3] + ".png";

        //create embed second page
        const dolltimeEmbed_3 = new Discord.MessageEmbed;
        dolltimeEmbed_3.setColor(colour_3);
        dolltimeEmbed_3.setTitle(dolltimeMsg.member.user.tag);
        dolltimeEmbed_3.setImage(dolltimeImageLink_3);
        dolltimeEmbed_3.addFields(
            {name: "Name:", value: dollName_3[doll3]},
            {name: "Rarity:", value: rarity_3},
            {name: "Class:", value: dollClass_3[doll3]},
            {name: "Timer:", value: timer}
        );

        //send embed if only three dolls in timer
        if(doll4 == -1)
        {
            //all pages in array
            const pages = [dolltimeEmbed_1, dolltimeEmbed_2, dolltimeEmbed_3];
            //reaction to change page
            const arrows = ["⬅️", "➡️"];
            //disable page changing after 20 seconds
            const time = "20000";
            //send pages
            dolltimePagination(dolltimeMsg, pages, arrows, time);
            return 0;
        }

        //if at least 4 dolls in timer, continue
        //set embed colour & star rarity
        switch(dollRarity_4[doll4])
        {
            case 2:
                colour_4 = "#fcfcfc";
                rarity_4 = ":star::star:";
                break;            
            case 3:
                colour_4 = "#6bdfce";
                rarity_4 = ":star::star::star:";
                break;
            case 4:
                colour_4 = "#d6e35a";
                rarity_4 = ":star::star::star::star:";
                break;
            case 5:
                colour_4 = "#ffb600";
                rarity_4 = ":star::star::star::star::star:";
                break;
        }
        //create doll 4 imgur link
        dolltimeImageLink_4 = "https://i.imgur.com/" + dollImage_4[doll4] + ".png";

        //create embed second page
        const dolltimeEmbed_4 = new Discord.MessageEmbed;
        dolltimeEmbed_4.setColor(colour_4);
        dolltimeEmbed_4.setTitle(dolltimeMsg.member.user.tag);
        dolltimeEmbed_4.setImage(dolltimeImageLink_4);
        dolltimeEmbed_4.addFields(
            {name: "Name:", value: dollName_4[doll4]},
            {name: "Rarity:", value: rarity_4},
            {name: "Class:", value: dollClass_4[doll4]},
            {name: "Timer:", value: timer}
        );

        //send embed if only four dolls in timer
        if(doll5 == -1)
        {
            //all pages in array
            const pages = [dolltimeEmbed_1, dolltimeEmbed_2, dolltimeEmbed_3,
                dolltimeEmbed_4];
            //reaction to change page
            const arrows = ["⬅️", "➡️"];
            //disable page changing after 20 seconds
            const time = "20000";
            //send pages
            dolltimePagination(dolltimeMsg, pages, arrows, time);
            return 0;
        }

        //if at least 5 dolls in timer, continue
        //set embed colour & star rarity
        switch(dollRarity_5[doll5])
        {
            case 2:
                colour_5 = "#fcfcfc";
                rarity_5 = ":star::star:";
                break;            
            case 3:
                colour_5 = "#6bdfce";
                rarity_5 = ":star::star::star:";
                break;
            case 4:
                colour_5 = "#d6e35a";
                rarity_5 = ":star::star::star::star:";
                break;
            case 5:
                colour_5 = "#ffb600";
                rarity_5 = ":star::star::star::star::star:";
                break;
        }
        //create doll 5 imgur link
        dolltimeImageLink_5 = "https://i.imgur.com/" + dollImage_5[doll5] + ".png";

        //create embed second page
        const dolltimeEmbed_5 = new Discord.MessageEmbed;
        dolltimeEmbed_5.setColor(colour_5);
        dolltimeEmbed_5.setTitle(dolltimeMsg.member.user.tag);
        dolltimeEmbed_5.setImage(dolltimeImageLink_5);
        dolltimeEmbed_5.addFields(
            {name: "Name:", value: dollName_5[doll5]},
            {name: "Rarity:", value: rarity_5},
            {name: "Class:", value: dollClass_5[doll5]},
            {name: "Timer:", value: timer}
        );

        //send embed
        //all pages in array
        const pages = [dolltimeEmbed_1, dolltimeEmbed_2, dolltimeEmbed_3, dolltimeEmbed_4,
        dolltimeEmbed_5];
        //reaction to change page
        const arrows = ["⬅️", "➡️"];
        //disable page changing after 20 seconds
        const time = "20000";
        //send pages
        dolltimePagination(dolltimeMsg, pages, arrows, time);
        return 0;
    }
}