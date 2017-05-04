import React from 'react';
import Svg, {Defs, G, Path, LinearGradient, Stop, Rect} from 'react-native-svg';

export default (width, height) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 375 667"
        >
            <Defs>
                <LinearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
                    <Stop stopColor="#AEEFFF" offset="0%"/>
                    <Stop stopColor="#45B4E5" offset="100%"/>
                </LinearGradient>
            </Defs>
            <G id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <G id="03">
                    <Rect id="Rectangle" fill="url(#linearGradient-1)" x="0" y="0" width={width} height={height}/>
                    <Path
                        d="M61.0891237,331.707656 L61.0891237,344.442031 L57.7297487,344.442031 L57.7297487,316.004531 L64.6828737,316.004531 C65.4511067,316.004531 66.2941973,316.017552 67.2121706,316.043593 C68.1301439,316.069635 69.0513587,316.15427 69.9758425,316.2975 C70.9003263,316.440729 71.7922444,316.665337 72.6516237,316.971328 C73.511003,317.277319 74.2759693,317.703747 74.9465456,318.250625 C75.6171219,318.797502 76.1509707,319.497365 76.5481081,320.350234 C76.9452455,321.203103 77.1438112,322.241504 77.1438112,323.465468 C77.1438112,324.36391 77.0005835,325.190725 76.7141237,325.945937 C76.427664,326.701149 76.0175118,327.378226 75.483655,327.977187 C74.9497981,328.576148 74.3085285,329.083956 73.5598269,329.500625 C72.8111252,329.917293 71.9810554,330.242811 71.0695925,330.477187 L71.0891237,330.477187 C71.8833985,330.737605 72.5376889,331.121716 73.0520144,331.629531 C73.5663398,332.137346 74.03183,332.791636 74.4484987,333.592421 C74.8651675,334.393207 75.2753196,335.343718 75.6789675,336.443984 C76.0826153,337.54425 76.577402,338.817024 77.1633425,340.262343 L78.8625612,344.442031 L75.1906862,344.442031 L72.202405,336.258437 C71.8768825,335.373016 71.5546201,334.637346 71.2356081,334.051406 C70.9165961,333.465465 70.5389957,332.999975 70.1027956,332.654921 C69.6665955,332.309868 69.1522777,332.065729 68.5598269,331.9225 C67.967376,331.77927 67.2349614,331.707656 66.3625612,331.707656 L61.0891237,331.707656 Z M61.0891237,328.836562 L66.2844362,328.836562 C67.1568364,328.836562 68.0292235,328.758438 68.9016237,328.602187 C69.7740239,328.445936 70.5585213,328.179012 71.2551394,327.801406 C71.9517574,327.4238 72.5149028,326.909482 72.9445925,326.258437 C73.3742821,325.607392 73.5891237,324.780578 73.5891237,323.777968 C73.5891237,322.801401 73.4100891,321.997373 73.0520144,321.365859 C72.6939396,320.734345 72.1958977,320.236303 71.5578737,319.871718 C70.9198497,319.507133 70.1711593,319.253229 69.31178,319.11 C68.4524007,318.96677 67.5149101,318.895156 66.49928,318.895156 L61.0891237,318.895156 L61.0891237,328.836562 Z M99.3076682,332.5475 L99.288137,332.274062 C99.2230325,331.427704 99.0570185,330.652972 98.7900901,329.949843 C98.5231617,329.246715 98.1553268,328.641252 97.6865745,328.133437 C97.2178221,327.625622 96.6481664,327.231746 95.9775901,326.951796 C95.3070138,326.671847 94.5485579,326.531875 93.7021995,326.531875 C92.7907366,326.531875 91.9704323,326.691378 91.241262,327.01039 C90.5120916,327.329402 89.8838427,327.762341 89.3564963,328.309218 C88.8291499,328.856096 88.4027219,329.494111 88.0771995,330.223281 C87.751677,330.952451 87.530325,331.727183 87.413137,332.5475 L99.3076682,332.5475 Z M101.905324,342.195937 C100.82459,343.133442 99.6266852,343.817029 98.3115745,344.246718 C96.9964637,344.676408 95.5055932,344.89125 93.8389182,344.89125 C92.2633895,344.89125 90.8571536,344.634091 89.6201682,344.119765 C88.3831829,343.60544 87.3382714,342.889301 86.4854026,341.971328 C85.6325337,341.053354 84.9814986,339.95636 84.5322776,338.680312 C84.0830566,337.404264 83.8584495,336.004538 83.8584495,334.481093 C83.8584495,333.035774 84.0798014,331.67511 84.522512,330.399062 C84.9652225,329.123014 85.6097473,328.003234 86.4561057,327.039687 C87.3024641,326.076141 88.3343548,325.314429 89.5518088,324.754531 C90.7692628,324.194632 92.1592229,323.914687 93.7217307,323.914687 C95.2581967,323.914687 96.5928188,324.165336 97.725637,324.66664 C98.8584551,325.167945 99.7894354,325.858042 100.518606,326.736953 C101.247776,327.615863 101.79139,328.660775 102.149465,329.871718 C102.50754,331.082662 102.686574,332.397753 102.686574,333.817031 C102.686574,333.960261 102.683319,334.126275 102.676809,334.315078 C102.670298,334.503881 102.660533,334.676405 102.647512,334.832656 L87.2764182,334.832656 L87.335012,335.711562 C87.4131373,336.688129 87.6117031,337.580048 87.9307151,338.387343 C88.2497271,339.194639 88.6891758,339.891247 89.2490745,340.477187 C89.8089731,341.063128 90.4893048,341.515597 91.2900901,341.834609 C92.0908753,342.153621 93.0055797,342.313125 94.0342307,342.313125 C95.4144459,342.313125 96.6774541,342.072242 97.8232932,341.590468 C98.9691323,341.108695 99.9977678,340.418598 100.909231,339.520156 L101.905324,342.195937 Z M117.994963,323.914687 C118.815279,323.914687 119.56397,323.989556 120.241056,324.139296 C120.918143,324.289037 121.543137,324.500623 122.116056,324.774062 C122.688976,325.047501 123.216314,325.386039 123.698088,325.789687 C124.179861,326.193335 124.629075,326.64906 125.045744,327.156875 L125.162931,324.402968 L128.346525,324.402968 L128.2684,329.344375 L128.2684,344.442031 L125.045744,344.442031 L125.084806,341.629531 C124.772305,342.0462 124.378429,342.453097 123.903166,342.850234 C123.427903,343.247371 122.890799,343.595675 122.291838,343.895156 C121.692876,344.194636 121.032076,344.43552 120.309416,344.617812 C119.586756,344.800105 118.8283,344.89125 118.034025,344.89125 C116.914228,344.89125 115.898613,344.744767 114.98715,344.451796 C114.075687,344.158826 113.261893,343.755184 112.545744,343.240859 C111.829595,342.726533 111.207856,342.124326 110.68051,341.434218 C110.153163,340.744111 109.720225,340.001931 109.381681,339.207656 C109.043138,338.413381 108.789234,337.589822 108.619963,336.736953 C108.450691,335.884084 108.366056,335.040993 108.366056,334.207656 C108.366056,332.918587 108.564622,331.655579 108.96176,330.418593 C109.358897,329.181608 109.957849,328.081359 110.758635,327.117812 C111.55942,326.154266 112.562014,325.379534 113.766447,324.793593 C114.97088,324.207653 116.380371,323.914687 117.994963,323.914687 Z M118.366056,342.313125 C119.277519,342.313125 120.133631,342.12758 120.934416,341.756484 C121.735201,341.385388 122.438319,340.838519 123.043791,340.115859 C123.649263,339.393199 124.131029,338.494771 124.489103,337.420546 C124.847178,336.346322 125.032723,335.1061 125.045744,333.699843 C125.045744,332.645151 124.88624,331.681619 124.567228,330.809218 C124.248216,329.936818 123.795747,329.181617 123.209806,328.543593 C122.623866,327.905569 121.910983,327.410783 121.071135,327.059218 C120.231287,326.707654 119.290541,326.531875 118.248869,326.531875 C117.454594,326.531875 116.738455,326.639295 116.100431,326.85414 C115.462407,327.068985 114.896007,327.365206 114.401213,327.742812 C113.906419,328.120418 113.476735,328.563122 113.11215,329.070937 C112.747565,329.578752 112.448089,330.122366 112.213713,330.701796 C111.979337,331.281226 111.806812,331.883434 111.696135,332.508437 C111.585457,333.13344 111.530119,333.751924 111.530119,334.363906 C111.530119,334.962867 111.572436,335.578095 111.657072,336.209609 C111.741708,336.841123 111.88168,337.44984 112.076994,338.035781 C112.272307,338.621721 112.539232,339.175101 112.877775,339.695937 C113.216319,340.216773 113.636236,340.669242 114.137541,341.053359 C114.638845,341.437475 115.237798,341.743462 115.934416,341.971328 C116.631034,342.199193 117.441573,342.313125 118.366056,342.313125 Z M150.236945,328.7975 C149.611942,328.016246 148.85023,327.443335 147.951788,327.07875 C147.053346,326.714164 146.096325,326.531875 145.080695,326.531875 C143.99996,326.531875 143.036428,326.740206 142.19007,327.156875 C141.343711,327.573543 140.624317,328.143199 140.031867,328.865859 C139.439416,329.588519 138.986946,330.434865 138.674445,331.404921 C138.361943,332.374978 138.205695,333.413379 138.205695,334.520156 C138.205695,335.613911 138.342412,336.636036 138.615851,337.586562 C138.88929,338.537088 139.305952,339.363902 139.865851,340.067031 C140.42575,340.770159 141.135378,341.320284 141.994757,341.717421 C142.854136,342.114559 143.869751,342.313125 145.041632,342.313125 C147.242164,342.313125 149.214801,341.557924 150.959601,340.0475 L151.858038,342.742812 C150.907513,343.498024 149.846326,344.044894 148.674445,344.383437 C147.502564,344.72198 146.207004,344.89125 144.787726,344.89125 C143.134072,344.89125 141.685519,344.62107 140.442023,344.080703 C139.198527,343.540335 138.160126,342.804666 137.326788,341.873671 C136.493451,340.942677 135.868457,339.852193 135.451788,338.602187 C135.03512,337.352181 134.826788,336.024069 134.826788,334.617812 C134.826788,333.159471 135.04814,331.779277 135.490851,330.477187 C135.933561,329.175097 136.578086,328.039041 137.424445,327.068984 C138.270803,326.098927 139.312459,325.330706 140.549445,324.764296 C141.78643,324.197887 143.199176,323.914687 144.787726,323.914687 C146.363255,323.914687 147.743449,324.16208 148.928351,324.656875 C150.113253,325.151669 151.037723,325.835256 151.701788,326.707656 L150.236945,328.7975 Z M160.310958,326.492812 L156.346114,326.492812 L156.346114,324.402968 L160.310958,324.402968 L160.408614,319.090468 L163.533614,318.1725 L163.533614,324.402968 L168.533614,324.402968 L168.533614,326.492812 L163.533614,326.492812 L163.533614,338.465468 C163.533614,338.908179 163.546635,339.360648 163.572677,339.82289 C163.598718,340.285132 163.686608,340.708305 163.836349,341.092421 C163.986089,341.476538 164.217206,341.789035 164.529708,342.029921 C164.842209,342.270808 165.284913,342.39125 165.857833,342.39125 C166.274502,342.39125 166.710695,342.335912 167.166427,342.225234 C167.622158,342.114556 168.123455,341.961563 168.670333,341.76625 L168.650802,344.168593 C168.19507,344.429011 167.700283,344.614556 167.166427,344.725234 C166.63257,344.835912 166.027107,344.89125 165.35002,344.89125 C164.256265,344.89125 163.380623,344.705705 162.723067,344.334609 C162.065512,343.963513 161.557704,343.465471 161.19963,342.840468 C160.841555,342.215465 160.603927,341.486306 160.486739,340.652968 C160.369551,339.819631 160.310958,338.940733 160.310958,338.01625 L160.310958,326.492812 Z M189.482422,344.442031 L189.482422,316.004531 L193.505859,316.004531 L208.095703,337.762343 L209.619141,340.242812 L209.619141,316.004531 L212.958984,316.004531 L212.958984,344.442031 L208.896484,344.442031 L194.248047,322.70375 L192.841797,320.281875 L192.841797,344.442031 L189.482422,344.442031 Z M230.318154,323.914687 C231.13847,323.914687 231.887161,323.989556 232.564248,324.139296 C233.241334,324.289037 233.866328,324.500623 234.439248,324.774062 C235.012167,325.047501 235.539506,325.386039 236.021279,325.789687 C236.503052,326.193335 236.952266,326.64906 237.368935,327.156875 L237.486123,324.402968 L240.669716,324.402968 L240.591591,329.344375 L240.591591,344.442031 L237.368935,344.442031 L237.407998,341.629531 C237.095496,342.0462 236.70162,342.453097 236.226357,342.850234 C235.751094,343.247371 235.21399,343.595675 234.615029,343.895156 C234.016068,344.194636 233.355267,344.43552 232.632607,344.617812 C231.909947,344.800105 231.151491,344.89125 230.357216,344.89125 C229.237419,344.89125 228.221804,344.744767 227.310341,344.451796 C226.398878,344.158826 225.585085,343.755184 224.868935,343.240859 C224.152786,342.726533 223.531047,342.124326 223.003701,341.434218 C222.476354,340.744111 222.043416,340.001931 221.704873,339.207656 C221.366329,338.413381 221.112426,337.589822 220.943154,336.736953 C220.773882,335.884084 220.689248,335.040993 220.689248,334.207656 C220.689248,332.918587 220.887813,331.655579 221.284951,330.418593 C221.682088,329.181608 222.28104,328.081359 223.081826,327.117812 C223.882611,326.154266 224.885205,325.379534 226.089638,324.793593 C227.294071,324.207653 228.703562,323.914687 230.318154,323.914687 Z M230.689248,342.313125 C231.60071,342.313125 232.456822,342.12758 233.257607,341.756484 C234.058392,341.385388 234.76151,340.838519 235.366982,340.115859 C235.972454,339.393199 236.45422,338.494771 236.812294,337.420546 C237.170369,336.346322 237.355914,335.1061 237.368935,333.699843 C237.368935,332.645151 237.209431,331.681619 236.890419,330.809218 C236.571407,329.936818 236.118938,329.181617 235.532998,328.543593 C234.947057,327.905569 234.234174,327.410783 233.394326,327.059218 C232.554478,326.707654 231.613732,326.531875 230.57206,326.531875 C229.777785,326.531875 229.061647,326.639295 228.423623,326.85414 C227.785599,327.068985 227.219198,327.365206 226.724404,327.742812 C226.22961,328.120418 225.799927,328.563122 225.435341,329.070937 C225.070756,329.578752 224.77128,330.122366 224.536904,330.701796 C224.302528,331.281226 224.130003,331.883434 224.019326,332.508437 C223.908648,333.13344 223.85331,333.751924 223.85331,334.363906 C223.85331,334.962867 223.895627,335.578095 223.980263,336.209609 C224.064899,336.841123 224.204872,337.44984 224.400185,338.035781 C224.595499,338.621721 224.862423,339.175101 225.200966,339.695937 C225.53951,340.216773 225.959427,340.669242 226.460732,341.053359 C226.962037,341.437475 227.560989,341.743462 228.257607,341.971328 C228.954225,342.199193 229.764764,342.313125 230.689248,342.313125 Z M250.099198,326.492812 L246.134355,326.492812 L246.134355,324.402968 L250.099198,324.402968 L250.196855,319.090468 L253.321855,318.1725 L253.321855,324.402968 L258.321855,324.402968 L258.321855,326.492812 L253.321855,326.492812 L253.321855,338.465468 C253.321855,338.908179 253.334875,339.360648 253.360917,339.82289 C253.386959,340.285132 253.474849,340.708305 253.624589,341.092421 C253.774329,341.476538 254.005447,341.789035 254.317948,342.029921 C254.63045,342.270808 255.073154,342.39125 255.646073,342.39125 C256.062742,342.39125 256.498936,342.335912 256.954667,342.225234 C257.410399,342.114556 257.911696,341.961563 258.458573,341.76625 L258.439042,344.168593 C257.983311,344.429011 257.488524,344.614556 256.954667,344.725234 C256.42081,344.835912 255.815348,344.89125 255.138261,344.89125 C254.044505,344.89125 253.168863,344.705705 252.511308,344.334609 C251.853752,343.963513 251.345945,343.465471 250.98787,342.840468 C250.629796,342.215465 250.392168,341.486306 250.27498,340.652968 C250.157792,339.819631 250.099198,338.940733 250.099198,338.01625 L250.099198,326.492812 Z M268.102899,315.887343 L268.102899,318.914687 L265.114618,318.914687 L265.114618,315.887343 L268.102899,315.887343 Z M264.958368,324.402968 L268.181024,324.402968 L268.181024,344.442031 L264.958368,344.442031 L264.958368,324.402968 Z M273.899569,324.402968 L277.454256,324.402968 L282.942537,337.879531 C283.033684,338.100886 283.14436,338.397107 283.274569,338.768203 C283.404778,339.139298 283.528474,339.513644 283.645662,339.89125 C283.788892,340.320939 283.93212,340.776664 284.07535,341.258437 C284.205559,340.789685 284.342276,340.34047 284.485506,339.910781 C284.602694,339.546196 284.71988,339.175106 284.837069,338.7975 C284.954257,338.419894 285.064933,338.113907 285.1691,337.879531 L290.559725,324.402968 L294.016756,324.402968 L285.559725,344.442031 L282.278475,344.442031 L273.899569,324.402968 Z M313.954051,332.5475 L313.934519,332.274062 C313.869415,331.427704 313.703401,330.652972 313.436472,329.949843 C313.169544,329.246715 312.801709,328.641252 312.332957,328.133437 C311.864204,327.625622 311.294549,327.231746 310.623972,326.951796 C309.953396,326.671847 309.19494,326.531875 308.348582,326.531875 C307.437119,326.531875 306.616815,326.691378 305.887644,327.01039 C305.158474,327.329402 304.530225,327.762341 304.002879,328.309218 C303.475532,328.856096 303.049104,329.494111 302.723582,330.223281 C302.398059,330.952451 302.176707,331.727183 302.059519,332.5475 L313.954051,332.5475 Z M316.551707,342.195937 C315.470972,343.133442 314.273068,343.817029 312.957957,344.246718 C311.642846,344.676408 310.151976,344.89125 308.485301,344.89125 C306.909772,344.89125 305.503536,344.634091 304.266551,344.119765 C303.029565,343.60544 301.984654,342.889301 301.131785,341.971328 C300.278916,341.053354 299.627881,339.95636 299.17866,338.680312 C298.729439,337.404264 298.504832,336.004538 298.504832,334.481093 C298.504832,333.035774 298.726184,331.67511 299.168894,330.399062 C299.611605,329.123014 300.25613,328.003234 301.102488,327.039687 C301.948846,326.076141 302.980737,325.314429 304.198191,324.754531 C305.415645,324.194632 306.805605,323.914687 308.368113,323.914687 C309.904579,323.914687 311.239201,324.165336 312.372019,324.66664 C313.504837,325.167945 314.435818,325.858042 315.164988,326.736953 C315.894158,327.615863 316.437773,328.660775 316.795847,329.871718 C317.153922,331.082662 317.332957,332.397753 317.332957,333.817031 C317.332957,333.960261 317.329702,334.126275 317.323191,334.315078 C317.316681,334.503881 317.306915,334.676405 317.293894,334.832656 L301.922801,334.832656 L301.981394,335.711562 C302.05952,336.688129 302.258085,337.580048 302.577097,338.387343 C302.896109,339.194639 303.335558,339.891247 303.895457,340.477187 C304.455355,341.063128 305.135687,341.515597 305.936472,341.834609 C306.737258,342.153621 307.651962,342.313125 308.680613,342.313125 C310.060828,342.313125 311.323836,342.072242 312.469676,341.590468 C313.615515,341.108695 314.64415,340.418598 315.555613,339.520156 L316.551707,342.195937 Z"
                        id="React-Native" fill="#FFFFFF"/>
                    <Path
                        d="M120.590563,377.402968 L119.360094,373.086562 L118.012438,377.402968 L111.645251,397.442031 L107.485094,397.442031 L99.2233756,369.004531 L102.856188,369.004531 L108.910876,390.625625 L109.653063,393.750625 L110.512438,390.918593 L117.699938,369.004531 L121.235094,369.004531 L128.246813,390.70375 L129.145251,393.731093 L129.848376,390.957656 L135.922594,369.004531 L139.438219,369.004531 L131.176501,397.442031 L127.035876,397.442031 L120.590563,377.402968 Z M158.730983,385.5475 L158.711451,385.274062 C158.646347,384.427704 158.480333,383.652972 158.213404,382.949843 C157.946476,382.246715 157.578641,381.641252 157.109889,381.133437 C156.641136,380.625622 156.071481,380.231746 155.400904,379.951796 C154.730328,379.671847 153.971872,379.531875 153.125514,379.531875 C152.214051,379.531875 151.393747,379.691378 150.664576,380.01039 C149.935406,380.329402 149.307157,380.762341 148.779811,381.309218 C148.252464,381.856096 147.826036,382.494111 147.500514,383.223281 C147.174991,383.952451 146.953639,384.727183 146.836451,385.5475 L158.730983,385.5475 Z M161.328639,395.195937 C160.247904,396.133442 159.05,396.817029 157.734889,397.246718 C156.419778,397.676408 154.928908,397.89125 153.262233,397.89125 C151.686704,397.89125 150.280468,397.634091 149.043483,397.119765 C147.806497,396.60544 146.761586,395.889301 145.908717,394.971328 C145.055848,394.053354 144.404813,392.95636 143.955592,391.680312 C143.506371,390.404264 143.281764,389.004538 143.281764,387.481093 C143.281764,386.035774 143.503116,384.67511 143.945826,383.399062 C144.388537,382.123014 145.033062,381.003234 145.87942,380.039687 C146.725778,379.076141 147.757669,378.314429 148.975123,377.754531 C150.192577,377.194632 151.582537,376.914687 153.145045,376.914687 C154.681511,376.914687 156.016133,377.165336 157.148951,377.66664 C158.281769,378.167945 159.21275,378.858042 159.94192,379.736953 C160.67109,380.615863 161.214705,381.660775 161.572779,382.871718 C161.930854,384.082662 162.109889,385.397753 162.109889,386.817031 C162.109889,386.960261 162.106634,387.126275 162.100123,387.315078 C162.093613,387.503881 162.083847,387.676405 162.070826,387.832656 L146.699733,387.832656 L146.758326,388.711562 C146.836452,389.688129 147.035017,390.580048 147.354029,391.387343 C147.673041,392.194639 148.11249,392.891247 148.672389,393.477187 C149.232287,394.063128 149.912619,394.515597 150.713404,394.834609 C151.51419,395.153621 152.428894,395.313125 153.457545,395.313125 C154.83776,395.313125 156.100768,395.072242 157.246608,394.590468 C158.392447,394.108695 159.421082,393.418598 160.332545,392.520156 L161.328639,395.195937 Z M177.418277,376.914687 C178.238594,376.914687 178.987284,376.989556 179.664371,377.139296 C180.341457,377.289037 180.966451,377.500623 181.539371,377.774062 C182.11229,378.047501 182.639629,378.386039 183.121402,378.789687 C183.603175,379.193335 184.05239,379.64906 184.469058,380.156875 L184.586246,377.402968 L187.76984,377.402968 L187.691715,382.344375 L187.691715,397.442031 L184.469058,397.442031 L184.508121,394.629531 C184.195619,395.0462 183.801743,395.453097 183.32648,395.850234 C182.851217,396.247371 182.314113,396.595675 181.715152,396.895156 C181.116191,397.194636 180.45539,397.43552 179.73273,397.617812 C179.01007,397.800105 178.251614,397.89125 177.45734,397.89125 C176.337542,397.89125 175.321927,397.744767 174.410465,397.451796 C173.499002,397.158826 172.685208,396.755184 171.969058,396.240859 C171.252909,395.726533 170.63117,395.124326 170.103824,394.434218 C169.576478,393.744111 169.143539,393.001931 168.804996,392.207656 C168.466452,391.413381 168.212549,390.589822 168.043277,389.736953 C167.874005,388.884084 167.789371,388.040993 167.789371,387.207656 C167.789371,385.918587 167.987936,384.655579 168.385074,383.418593 C168.782211,382.181608 169.381164,381.081359 170.181949,380.117812 C170.982734,379.154266 171.985328,378.379534 173.189761,377.793593 C174.394195,377.207653 175.803686,376.914687 177.418277,376.914687 Z M177.789371,395.313125 C178.700834,395.313125 179.556945,395.12758 180.35773,394.756484 C181.158515,394.385388 181.861633,393.838519 182.467105,393.115859 C183.072577,392.393199 183.554343,391.494771 183.912418,390.420546 C184.270492,389.346322 184.456037,388.1061 184.469058,386.699843 C184.469058,385.645151 184.309555,384.681619 183.990543,383.809218 C183.671531,382.936818 183.219061,382.181617 182.633121,381.543593 C182.04718,380.905569 181.334297,380.410783 180.494449,380.059218 C179.654601,379.707654 178.713855,379.531875 177.672183,379.531875 C176.877908,379.531875 176.16177,379.639295 175.523746,379.85414 C174.885722,380.068985 174.319321,380.365206 173.824527,380.742812 C173.329733,381.120418 172.90005,381.563122 172.535465,382.070937 C172.170879,382.578752 171.871403,383.122366 171.637027,383.701796 C171.402651,384.281226 171.230127,384.883434 171.119449,385.508437 C171.008771,386.13344 170.953433,386.751924 170.953433,387.363906 C170.953433,387.962867 170.995751,388.578095 171.080386,389.209609 C171.165022,389.841123 171.304995,390.44984 171.500308,391.035781 C171.695622,391.621721 171.962546,392.175101 172.30109,392.695937 C172.639633,393.216773 173.059551,393.669242 173.560855,394.053359 C174.06216,394.437475 174.661112,394.743462 175.35773,394.971328 C176.054348,395.199193 176.864887,395.313125 177.789371,395.313125 Z M197.199322,379.492812 L193.234478,379.492812 L193.234478,377.402968 L197.199322,377.402968 L197.296978,372.090468 L200.421978,371.1725 L200.421978,377.402968 L205.421978,377.402968 L205.421978,379.492812 L200.421978,379.492812 L200.421978,391.465468 C200.421978,391.908179 200.434998,392.360648 200.46104,392.82289 C200.487082,393.285132 200.574972,393.708305 200.724712,394.092421 C200.874452,394.476538 201.10557,394.789035 201.418072,395.029921 C201.730573,395.270808 202.173277,395.39125 202.746197,395.39125 C203.162865,395.39125 203.599059,395.335912 204.05479,395.225234 C204.510522,395.114556 205.011819,394.961563 205.558697,394.76625 L205.539165,397.168593 C205.083434,397.429011 204.588647,397.614556 204.05479,397.725234 C203.520933,397.835912 202.915471,397.89125 202.238384,397.89125 C201.144629,397.89125 200.268986,397.705705 199.611431,397.334609 C198.953876,396.963513 198.446068,396.465471 198.087993,395.840468 C197.729919,395.215465 197.492291,394.486306 197.375103,393.652968 C197.257915,392.819631 197.199322,391.940733 197.199322,391.01625 L197.199322,379.492812 Z M215.32021,368.301406 L215.32021,380.059218 C216.140526,378.952442 217.097548,378.151669 218.191303,377.656875 C219.285059,377.16208 220.574109,376.914687 222.058491,376.914687 C223.516832,376.914687 224.717991,377.152315 225.662007,377.627578 C226.606022,378.10284 227.354712,378.724579 227.9081,379.492812 C228.461489,380.261045 228.845599,381.126922 229.060444,382.090468 C229.275289,383.054015 229.38271,384.030568 229.38271,385.020156 L229.38271,397.442031 L226.160053,397.442031 L226.160053,385.215468 C226.160053,384.382131 226.078674,383.617165 225.915913,382.920546 C225.753152,382.223928 225.479717,381.624976 225.0956,381.123671 C224.711484,380.622367 224.197166,380.231746 223.552632,379.951796 C222.908097,379.671847 222.110579,379.531875 221.160053,379.531875 C220.23557,379.531875 219.41201,379.704399 218.68935,380.049453 C217.966691,380.394507 217.357973,380.863252 216.863178,381.455703 C216.368384,382.048154 215.987529,382.738251 215.7206,383.526015 C215.453672,384.31378 215.32021,385.143849 215.32021,386.01625 L215.32021,397.442031 L212.097553,397.442031 L212.097553,368.301406 L215.32021,368.301406 Z M252.366879,385.5475 L252.347348,385.274062 C252.282243,384.427704 252.11623,383.652972 251.849301,382.949843 C251.582373,382.246715 251.214538,381.641252 250.745785,381.133437 C250.277033,380.625622 249.707377,380.231746 249.036801,379.951796 C248.366225,379.671847 247.607769,379.531875 246.76141,379.531875 C245.849948,379.531875 245.029643,379.691378 244.300473,380.01039 C243.571303,380.329402 242.943054,380.762341 242.415707,381.309218 C241.888361,381.856096 241.461933,382.494111 241.13641,383.223281 C240.810888,383.952451 240.589536,384.727183 240.472348,385.5475 L252.366879,385.5475 Z M254.964535,395.195937 C253.883801,396.133442 252.685896,396.817029 251.370785,397.246718 C250.055675,397.676408 248.564804,397.89125 246.898129,397.89125 C245.322601,397.89125 243.916365,397.634091 242.679379,397.119765 C241.442394,396.60544 240.397482,395.889301 239.544614,394.971328 C238.691745,394.053354 238.04071,392.95636 237.591489,391.680312 C237.142268,390.404264 236.91766,389.004538 236.91766,387.481093 C236.91766,386.035774 237.139012,384.67511 237.581723,383.399062 C238.024434,382.123014 238.668958,381.003234 239.515317,380.039687 C240.361675,379.076141 241.393566,378.314429 242.61102,377.754531 C243.828474,377.194632 245.218434,376.914687 246.780942,376.914687 C248.317408,376.914687 249.65203,377.165336 250.784848,377.66664 C251.917666,378.167945 252.848646,378.858042 253.577817,379.736953 C254.306987,380.615863 254.850601,381.660775 255.208676,382.871718 C255.566751,384.082662 255.745785,385.397753 255.745785,386.817031 C255.745785,386.960261 255.74253,387.126275 255.73602,387.315078 C255.729509,387.503881 255.719744,387.676405 255.706723,387.832656 L240.335629,387.832656 L240.394223,388.711562 C240.472348,389.688129 240.670914,390.580048 240.989926,391.387343 C241.308938,392.194639 241.748387,392.891247 242.308285,393.477187 C242.868184,394.063128 243.548516,394.515597 244.349301,394.834609 C245.150086,395.153621 246.064791,395.313125 247.093442,395.313125 C248.473657,395.313125 249.736665,395.072242 250.882504,394.590468 C252.028343,394.108695 253.056979,393.418598 253.968442,392.520156 L254.964535,395.195937 Z M266.171361,397.442031 L262.948705,397.442031 L262.948705,382.227187 C262.948705,381.40687 262.935684,380.586566 262.909642,379.76625 C262.883601,378.945933 262.857559,378.15818 262.831517,377.402968 L266.054174,377.402968 L266.171361,380.430312 C266.718239,379.323536 267.460419,378.464169 268.397924,377.852187 C269.335428,377.240205 270.377085,376.934218 271.522924,376.934218 C272.278136,376.934218 272.981254,377.012343 273.632299,377.168593 L273.671361,380.195937 C273.397922,380.052707 273.065894,379.938776 272.675267,379.85414 C272.284641,379.769504 271.867978,379.727187 271.425267,379.727187 C270.644014,379.727187 269.927875,379.88018 269.27683,380.186171 C268.625785,380.492163 268.072405,380.931611 267.616674,381.504531 C267.160942,382.07745 266.806128,382.774058 266.552221,383.594375 C266.298313,384.414691 266.171361,385.332651 266.171361,386.348281 L266.171361,397.442031 Z"
                        id="Weather" fill="#FFFFFF"/>
                    <G id="Group-10" transform={{translate: "136.000000, 204.041063"}} fill="#FFFFFF">
                        <Path
                            d="M0.268096515,32.4821562 C0.268096515,43.1997612 9.00983021,51.9414949 19.6675603,51.9414949 L30.9839142,51.88162 C32.9597855,60.5634789 40.6836461,67.0299668 49.9043789,67.0299668 L77.8659517,67.0299668 C92.1161752,67.0299668 103.731903,55.4142385 103.731903,41.1041402 C103.731903,26.8539167 92.1161752,15.2980633 77.8659517,15.2980633 C75.6505809,15.2980633 73.4950849,15.5974377 71.4593387,16.0764368 C69.7229669,11.6456951 66.7292225,7.81370227 62.8972297,4.93970763 C58.5263628,1.76633855 53.2573727,0.0299667874 47.689008,0.0299667874 C38.2287757,0.0299667874 29.5469169,5.35883185 24.9964254,13.8011911 C23.2600536,13.2623171 21.463807,13.0228175 19.7873101,13.0228175 L19.7873101,13.0228175 C9.00983021,13.0826924 0.327971403,21.8244261 0.268096515,32.4821562 Z M34.7560322,47.630503 C34.7560322,39.3078935 41.5817694,32.5420311 49.9642538,32.5420311 C51.9401251,32.5420311 53.7363718,32.9012805 55.4727435,33.5599042 C56.5504915,33.9790284 57.7479893,33.4401545 58.1671135,32.4222814 C61.5201072,24.6385459 69.3038427,19.6090553 77.8659517,19.6090553 C89.7810545,19.6090553 99.4807864,29.3087872 99.4807864,41.164015 C99.4807864,53.1389927 89.7810545,62.8387246 77.8659517,62.8387246 L49.9043789,62.8387246 L49.9043789,62.8387246 C41.5817694,62.8387246 34.7560322,56.0129873 34.7560322,47.630503 Z M4.51921358,32.5420311 C4.51921358,24.1595468 11.3449508,17.3338095 19.7274352,17.3338095 C21.463807,17.3338095 23.4995532,17.7529337 25.2359249,18.4714324 C26.3136729,18.8905566 27.5111707,18.4115575 27.9901698,17.3936844 C31.5826631,9.49019914 39.3065237,4.34095874 47.689008,4.34095874 C56.4906166,4.34095874 64.2743521,9.55007403 67.5075961,17.5134342 C62.2984808,19.7886799 57.8677391,23.8002974 55.1733691,28.9495378 C53.4968722,28.5304136 51.8203753,28.2909141 49.9642538,28.2909141 C44.7551385,28.2909141 39.9052726,30.2667854 36.2529044,33.9191536 C32.5406613,37.5715217 30.56479,42.4213877 30.56479,47.5706281 L30.56479,47.630503 L19.7274352,47.6903779 C11.3449508,47.7502528 4.51921358,40.9843904 4.51921358,32.5420311 Z"
                            id="Shape"/>
                        <Path
                            d="M56.9923092,31.4804395 C56.9923092,31.4804395 36.5534808,24.7520695 33.2173892,45.460419 C29.8812976,66.1687686 55.5411094,64.9388043 59.774434,64.9388043 C64.0077587,64.9388043 83.7003561,65.5112073 87.3999061,63.2338859 C91.0994561,60.9565644 103.748511,49.993114 102.333305,41.447452 C100.9181,32.9017901 93.0282437,15.6357603 76.4013389,17.2037233 C59.774434,18.7716864 56.9923092,31.4804395 56.9923092,31.4804395 Z"
                            id="Path-5" fillOpacity="0.5"/>
                    </G>
                </G>
            </G>
        </Svg>
    );
};
