import React from "react";
import pdf from "@react-pdf/renderer";
const {
  Rect,
  Svg,
  G,
  Path,
  Text,
  Defs,
  ClipPath,
  Tspan,
  LinearGradient,
  Stop,
} = pdf;

const Svg2 = () => (
  <Svg width="400" viewBox="0 0 600 400">
    <Defs>
      <LinearGradient x1="0" x2="0" y1="0" y2="1" id="highcharts-5xj7ee9-2948">
        <Stop offset="0" stopColor="#B5E2D5" stopOpacity="0.7" />
        <Stop offset="0.5" stopColor="rgb(225,243,239)" stopOpacity="0.5" />
        <Stop offset="1" stopColor="#fff" stopOpacity="1" />
      </LinearGradient>

      <ClipPath id="highcharts-5xj7ee9-2949">
        <Rect x="0" y="0" width="544" height="319" fill="none" />
      </ClipPath>
    </Defs>

    <Rect fill="#ffffff" x="0" y="0" width="600" height="400" rx="0" ry="0" />
    <Rect fill="none" x="46" y="45" width="544" height="319" />
    <G>
      <Path fill="none" d="M 58.5 45 L 58.5 364" opacity="1" />
      <Path fill="none" d="M 167.5 45 L 167.5 364" opacity="1" />
      <Path fill="none" d="M 276.5 45 L 276.5 364" opacity="1" />
      <Path fill="none" d="M 384.5 45 L 384.5 364" opacity="1" />
      <Path fill="none" d="M 492.5 45 L 492.5 364" opacity="1" />
    </G>
    <G>
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 364.5 L 590 364.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 318.5 L 590 318.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 273.5 L 590 273.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 227.5 L 590 227.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 182.5 L 590 182.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 136.5 L 590 136.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 91.5 L 590 91.5"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="1"
        d="M 46 44.5 L 590 44.5"
        opacity="1"
      />
    </G>
    <Rect
      fill="none"
      stroke="#cccccc"
      strokeWidth="1"
      x="45.5"
      y="44.5"
      width="545"
      height="320"
    />
    <G>
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 58.5 364 L 58.5 374"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 167.5 364 L 167.5 374"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 276.5 364 L 276.5 374"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 384.5 364 L 384.5 374"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 492.5 364 L 492.5 374"
        opacity="1"
      />
      <Path
        fill="none"
        stroke="#ccd6eb"
        strokeWidth="1"
        d="M 46 364.5 L 590 364.5"
      />
    </G>
    <G>
      <Path fill="none" d="M 46 45 L 46 364" />
    </G>
    <G>
      <G
        transform="translate(46,45) scale(1 1)"
        clip-Path="url(#highcharts-5xj7ee9-2949)"
      >
        <Path
          fill="url(#highcharts-5xj7ee9-2948)"
          d="M 0 229.26985714285718 L 2.0797378481704 230.31799999999998 L 4.1594756963408 228.6014761904762 L 6.2392135445112 229.46125714285716 L 8.3189513926816 228.27640000000002 L 10.398689240852 226.6905142857143 L 12.478427089022 227.21914285714286 L 14.558164937193 230.3909142857143 L 16.637902785363 230.26331428571427 L 18.717640633534 229.35188571428571 L 20.797378481704 224.44840000000002 L 22.877116329874 210.4306285714286 L 24.956854178045 177.0358857142857 L 27.036592026215 166.08051428571426 L 29.116329874386 169.36165714285715 L 31.196067722556 175.3892380952381 L 33.275805570726 223.51874285714285 L 35.355543418897 233.1981142857143 L 37.435281267067 207.86040000000003 L 39.515019115238 190.16957142857143 L 41.594756963408 181.68417142857143 L 43.674494811578 162.9452 L 45.754232659749 165.57011428571428 L 47.833970507919 180.21980952380952 L 49.91370835609 183.41588571428574 L 51.99344620426 212.05297142857142 L 54.07318405243 217.15697142857144 L 56.152921900601 217.3757142857143 L 58.232659748771 223.1906285714286 L 60.312397596942 206.2562857142857 L 62.392135445112 197.06908571428573 L 64.471873293282 189.6865142857143 L 66.551611141453 188.33152380952382 L 68.631348989623 176.52548571428574 L 70.711086837794 152.8648 L 72.790824685964 160.33851428571433 L 74.870562534134 156.2872142857143 L 76.950300382305 154.97931428571428 L 79.030038230475 181.192 L 81.109776078646 191.10834285714287 L 83.189513926816 183.83514285714284 L 85.269251774986 188.26468571428572 L 87.348989623157 185.45748571428572 L 89.428727471327 188.17354285714288 L 91.508465319498 136.9330285714286 L 93.588203167668 111.66519047619047 L 95.667941015838 112.30622857142856 L 97.747678864009 90.55954285714287 L 99.827416712179 77.56257142857146 L 101.90715456035 101.60150000000002 L 103.98689240852 108.73342857142859 L 106.06663025669 112.8166285714286 L 108.14636810486 155.23451428571428 L 110.22610595303 172.6428 L 112.3058438012 193.19247619047619 L 114.38558164937 181.68417142857143 L 116.46531949754 174.83022857142856 L 118.54505734571 169.9632 L 120.62479519388 139.8131428571429 L 122.70453304205 104.68668571428569 L 124.78427089022 98.7806285714286 L 126.86400873839 77.32560000000001 L 128.94374658656 86.05708571428573 L 131.02348443474 106.01737142857141 L 133.10322228291 139.63085714285717 L 135.18296013108 165.64302857142857 L 137.26269797925 203.9959428571429 L 139.34243582742 225.0165238095238 L 141.42217367559 229.71645714285714 L 143.50191152376 214.53205714285716 L 145.58164937193 202.95691428571428 L 147.6613872201 202.40550000000002 L 149.74112506827 194.35302857142858 L 151.82086291644 199.6757714285714 L 153.90060076461 218.81577142857145 L 155.98033861278 170.11814285714283 L 158.06007646095 146.13845714285713 L 160.13981430912 143.02137142857143 L 162.21955215729 142.96668571428572 L 164.29929000546 170.91108571428572 L 166.37902785363 238.90821428571428 L 168.4587657018 247.50754285714288 L 170.53850354997 250.5517142857143 L 172.61824139814 248.1273142857143 L 174.69797924631 241.14880952380952 L 176.77771709448 239.7057142857143 L 178.85745494265 227.21914285714286 L 180.93719279082 220.74800000000005 L 183.016930639 218.67450000000002 L 185.09666848717 226.52645714285717 L 187.17640633534 225.87022857142858 L 189.25614418351 224.4484 L 191.33588203168 209.50097142857143 L 193.41561987985 210.79520000000002 L 195.49535772802 216.39137142857146 L 197.57509557619 216.08148571428572 L 199.65483342436 239.23177142857145 L 201.73457127253 260.1824761904762 L 203.8143091207 255.78331428571428 L 205.89404696887 258.0801142857143 L 207.97378481704 264.7882285714286 L 210.05352266521 268.3245714285714 L 212.13326051338 278.69207142857147 L 214.21299836155 260.8690857142857 L 216.29273620972 257.6426285714286 L 218.37247405789 247.74451428571427 L 220.45221190606 241.39185714285713 L 222.53194975423 247.8721142857143 L 224.6116876024 242.53114285714287 L 226.69142545057 237.15371428571427 L 228.77116329874 237.40435714285712 L 230.85090114691 230.24508571428572 L 232.93063899508 214.47737142857142 L 235.01037684326 214.25862857142857 L 237.09011469143 211.25091428571432 L 239.1698525396 211.92537142857145 L 241.24959038777 225.14108571428574 L 243.32932823594 222.46148571428571 L 245.40906608411 214.69611428571432 L 247.48880393228 210.9957142857143 L 249.56854178045 208.26142857142855 L 251.64827962862 208.4984 L 253.72801747679 222.58908571428572 L 255.80775532496 235.71821428571428 L 257.88749317313 248.94760000000002 L 259.9672310213 243.31497142857143 L 262.04696886947 243.18737142857142 L 264.12670671764 241.07285714285715 L 266.20644456581 199.35980952380953 L 268.28618241398 153.32051428571432 L 270.36592026215 153.9038285714286 L 272.44565811032 157.13028571428575 L 274.52539595849 157.03914285714288 L 276.60513380666 203.68605714285712 L 278.68487165483 236.33342857142856 L 280.764609503 193.58742857142857 L 282.84434735117 93.58852380952382 L 284.92408519934 82.84885714285713 L 287.00382304752 67.02645714285711 L 289.08356089569 63.39897142857143 L 291.16329874386 81.46348571428572 L 293.24303659203 48.89814285714283 L 295.3227744402 45.425599999999974 L 297.40251228837 48.34217142857142 L 299.48225013654 41.178342857142866 L 301.56198798471 88.39034285714288 L 303.64172583288 131.1363428571429 L 305.72146368105 144.57080000000002 L 307.80120152922 171.54908571428575 L 309.88093937739 182.49838095238098 L 311.96067722556 165.97114285714287 L 314.04041507373 158.35160000000002 L 316.1201529219 156.54697142857142 L 318.19989077007 139.50325714285717 L 320.27962861824 173.17142857142858 L 322.35936646641 184.49137142857145 L 324.43910431458 192.78537142857144 L 326.51884216275 205.89171428571427 L 328.59858001092 226.45961904761904 L 330.67831785909 226.14365714285714 L 332.75805570726 187.59022857142855 L 334.83779355543 136.82365714285714 L 336.9175314036 84.17042857142857 L 338.99726925177 71.20080000000002 L 341.07700709995 71.54714285714289 L 343.15674494812 107.36628571428571 L 345.23648279629 142.54742857142858 L 347.31622064446 219.472 L 349.39595849263 221.98754285714284 L 351.4756963408 232.12262857142858 L 353.55543418897 196.10297142857144 L 355.63517203714 189.8657619047619 L 357.71490988531 183.3612 L 359.79464773348 151.1695428571429 L 361.87438558165 147.56028571428575 L 363.95412342982 156.9252142857143 L 366.03386127799 161.23171428571428 L 368.11359912616 162.52594285714287 L 370.19333697433 192.11091428571427 L 372.2730748225 166.75497142857142 L 374.35281267067 140.78533333333337 L 376.43255051884 122.47777142857143 L 378.51228836701 57.63874285714286 L 380.59202621518 45.49851428571429 L 382.67176406335 48.282928571428556 L 384.75150191152 44.09491428571431 L 386.83123975969 50.456685714285754 L 388.91097760786 86.95028571428574 L 390.99071545603 65.01523809523815 L 393.07045330421 75.15639999999999 L 395.15019115238 87.05965714285716 L 397.22992900055 119.59765714285712 L 399.30966684872 228.58628571428574 L 401.38940469689 235.14857142857144 L 403.46914254506 189.12142857142857 L 405.54888039323 157.8412 L 407.6286182414 154.45068571428573 L 409.70835608957 154.396 L 411.78809393774 157.51308571428572 L 413.86783178591 220.71154285714286 L 415.94756963408 242.7498857142857 L 418.02730748225 241.69262857142857 L 420.10704533042 246.54142857142858 L 422.18678317859 243.4608 L 424.26652102676 229.26074285714287 L 426.34625887493 212.47222857142856 L 428.4259967231 208.7855 L 430.50573457127 207.75102857142858 L 432.58547241944 213.5659428571429 L 434.66521026761 214.9513142857143 L 436.74494811578 225.6697142857143 L 438.82468596395 217.53977142857144 L 440.90442381212 211.85245714285713 L 442.98416166029 213.67531428571428 L 445.06389950847 212.74565714285717 L 447.14363735664 216.1452857142857 L 449.22337520481 234.18245714285712 L 451.30311305298 237.66411428571428 L 453.38285090115 236.20582857142858 L 455.46258874932 248.3825142857143 L 457.54232659749 243.93474285714285 L 459.62206444566 242.31240000000003 L 461.70180229383 249.7678857142857 L 463.781540142 259.17990476190477 L 465.86127799017 266.84805714285716 L 467.94101583834 273.7566857142857 L 470.02075368651 267.0121142857143 L 472.10049153468 260.75971428571427 L 474.18022938285 256.18434285714284 L 476.25996723102 257.9889714285714 L 478.33970507919 258.99154285714286 L 480.41944292736 231.2112 L 482.49918077553 216.85923809523808 L 484.5789186237 214.09457142857144 L 486.65865647187 209.4098285714286 L 488.73839432004 211.70662857142855 L 490.81813216821 231.68514285714286 L 492.89787001638 225.81554285714287 L 494.97760786455 223.82862857142857 L 497.05734571273 218.76108571428574 L 499.1370835609 223.5005142857143 L 501.21682140907 235.13338095238095 L 503.29655925724 237.68234285714286 L 505.37629710541 244.08057142857143 L 507.45603495358 251.66365714285712 L 509.53577280175 248.6605 L 511.61551064992 247.01537142857143 L 513.69524849809 221.34954285714286 L 515.77498634626 149.43782857142855 L 517.85472419443 141.89120000000003 L 519.9344620426 143.51354285714288 L 522.01419989077 147.23217142857143 L 524.09393773894 188.06417142857143 L 526.17367558711 216.95645714285715 L 528.25341343528 197.30909523809524 L 530.33315128345 196.1941142857143 L 532.41288913162 204.21468571428574 L 534.49262697979 203.55845714285715 L 536.57236482796 228.65464285714285 L 538.65210267613 231.6486857142857 L 540.7318405243 219.83657142857146 L 542.81157837247 208.47409523809526 L 542.81157837247 319 L 540.7318405243 319 L 538.65210267613 319 L 536.57236482796 319 L 534.49262697979 319 L 532.41288913162 319 L 530.33315128345 319 L 528.25341343528 319 L 526.17367558711 319 L 524.09393773894 319 L 522.01419989077 319 L 519.9344620426 319 L 517.85472419443 319 L 515.77498634626 319 L 513.69524849809 319 L 511.61551064992 319 L 509.53577280175 319 L 507.45603495358 319 L 505.37629710541 319 L 503.29655925724 319 L 501.21682140907 319 L 499.1370835609 319 L 497.05734571273 319 L 494.97760786455 319 L 492.89787001638 319 L 490.81813216821 319 L 488.73839432004 319 L 486.65865647187 319 L 484.5789186237 319 L 482.49918077553 319 L 480.41944292736 319 L 478.33970507919 319 L 476.25996723102 319 L 474.18022938285 319 L 472.10049153468 319 L 470.02075368651 319 L 467.94101583834 319 L 465.86127799017 319 L 463.781540142 319 L 461.70180229383 319 L 459.62206444566 319 L 457.54232659749 319 L 455.46258874932 319 L 453.38285090115 319 L 451.30311305298 319 L 449.22337520481 319 L 447.14363735664 319 L 445.06389950847 319 L 442.98416166029 319 L 440.90442381212 319 L 438.82468596395 319 L 436.74494811578 319 L 434.66521026761 319 L 432.58547241944 319 L 430.50573457127 319 L 428.4259967231 319 L 426.34625887493 319 L 424.26652102676 319 L 422.18678317859 319 L 420.10704533042 319 L 418.02730748225 319 L 415.94756963408 319 L 413.86783178591 319 L 411.78809393774 319 L 409.70835608957 319 L 407.6286182414 319 L 405.54888039323 319 L 403.46914254506 319 L 401.38940469689 319 L 399.30966684872 319 L 397.22992900055 319 L 395.15019115238 319 L 393.07045330421 319 L 390.99071545603 319 L 388.91097760786 319 L 386.83123975969 319 L 384.75150191152 319 L 382.67176406335 319 L 380.59202621518 319 L 378.51228836701 319 L 376.43255051884 319 L 374.35281267067 319 L 372.2730748225 319 L 370.19333697433 319 L 368.11359912616 319 L 366.03386127799 319 L 363.95412342982 319 L 361.87438558165 319 L 359.79464773348 319 L 357.71490988531 319 L 355.63517203714 319 L 353.55543418897 319 L 351.4756963408 319 L 349.39595849263 319 L 347.31622064446 319 L 345.23648279629 319 L 343.15674494812 319 L 341.07700709995 319 L 338.99726925177 319 L 336.9175314036 319 L 334.83779355543 319 L 332.75805570726 319 L 330.67831785909 319 L 328.59858001092 319 L 326.51884216275 319 L 324.43910431458 319 L 322.35936646641 319 L 320.27962861824 319 L 318.19989077007 319 L 316.1201529219 319 L 314.04041507373 319 L 311.96067722556 319 L 309.88093937739 319 L 307.80120152922 319 L 305.72146368105 319 L 303.64172583288 319 L 301.56198798471 319 L 299.48225013654 319 L 297.40251228837 319 L 295.3227744402 319 L 293.24303659203 319 L 291.16329874386 319 L 289.08356089569 319 L 287.00382304752 319 L 284.92408519934 319 L 282.84434735117 319 L 280.764609503 319 L 278.68487165483 319 L 276.60513380666 319 L 274.52539595849 319 L 272.44565811032 319 L 270.36592026215 319 L 268.28618241398 319 L 266.20644456581 319 L 264.12670671764 319 L 262.04696886947 319 L 259.9672310213 319 L 257.88749317313 319 L 255.80775532496 319 L 253.72801747679 319 L 251.64827962862 319 L 249.56854178045 319 L 247.48880393228 319 L 245.40906608411 319 L 243.32932823594 319 L 241.24959038777 319 L 239.1698525396 319 L 237.09011469143 319 L 235.01037684326 319 L 232.93063899508 319 L 230.85090114691 319 L 228.77116329874 319 L 226.69142545057 319 L 224.6116876024 319 L 222.53194975423 319 L 220.45221190606 319 L 218.37247405789 319 L 216.29273620972 319 L 214.21299836155 319 L 212.13326051338 319 L 210.05352266521 319 L 207.97378481704 319 L 205.89404696887 319 L 203.8143091207 319 L 201.73457127253 319 L 199.65483342436 319 L 197.57509557619 319 L 195.49535772802 319 L 193.41561987985 319 L 191.33588203168 319 L 189.25614418351 319 L 187.17640633534 319 L 185.09666848717 319 L 183.016930639 319 L 180.93719279082 319 L 178.85745494265 319 L 176.77771709448 319 L 174.69797924631 319 L 172.61824139814 319 L 170.53850354997 319 L 168.4587657018 319 L 166.37902785363 319 L 164.29929000546 319 L 162.21955215729 319 L 160.13981430912 319 L 158.06007646095 319 L 155.98033861278 319 L 153.90060076461 319 L 151.82086291644 319 L 149.74112506827 319 L 147.6613872201 319 L 145.58164937193 319 L 143.50191152376 319 L 141.42217367559 319 L 139.34243582742 319 L 137.26269797925 319 L 135.18296013108 319 L 133.10322228291 319 L 131.02348443474 319 L 128.94374658656 319 L 126.86400873839 319 L 124.78427089022 319 L 122.70453304205 319 L 120.62479519388 319 L 118.54505734571 319 L 116.46531949754 319 L 114.38558164937 319 L 112.3058438012 319 L 110.22610595303 319 L 108.14636810486 319 L 106.06663025669 319 L 103.98689240852 319 L 101.90715456035 319 L 99.827416712179 319 L 97.747678864009 319 L 95.667941015838 319 L 93.588203167668 319 L 91.508465319498 319 L 89.428727471327 319 L 87.348989623157 319 L 85.269251774986 319 L 83.189513926816 319 L 81.109776078646 319 L 79.030038230475 319 L 76.950300382305 319 L 74.870562534134 319 L 72.790824685964 319 L 70.711086837794 319 L 68.631348989623 319 L 66.551611141453 319 L 64.471873293282 319 L 62.392135445112 319 L 60.312397596942 319 L 58.232659748771 319 L 56.152921900601 319 L 54.07318405243 319 L 51.99344620426 319 L 49.91370835609 319 L 47.833970507919 319 L 45.754232659749 319 L 43.674494811578 319 L 41.594756963408 319 L 39.515019115238 319 L 37.435281267067 319 L 35.355543418897 319 L 33.275805570726 319 L 31.196067722556 319 L 29.116329874386 319 L 27.036592026215 319 L 24.956854178045 319 L 22.877116329874 319 L 20.797378481704 319 L 18.717640633534 319 L 16.637902785363 319 L 14.558164937193 319 L 12.478427089022 319 L 10.398689240852 319 L 8.3189513926816 319 L 6.2392135445112 319 L 4.1594756963408 319 L 2.0797378481704 319 L 0 319"
        />
        <Path
          fill="none"
          d="M 0 229.26985714285718 L 2.0797378481704 230.31799999999998 L 4.1594756963408 228.6014761904762 L 6.2392135445112 229.46125714285716 L 8.3189513926816 228.27640000000002 L 10.398689240852 226.6905142857143 L 12.478427089022 227.21914285714286 L 14.558164937193 230.3909142857143 L 16.637902785363 230.26331428571427 L 18.717640633534 229.35188571428571 L 20.797378481704 224.44840000000002 L 22.877116329874 210.4306285714286 L 24.956854178045 177.0358857142857 L 27.036592026215 166.08051428571426 L 29.116329874386 169.36165714285715 L 31.196067722556 175.3892380952381 L 33.275805570726 223.51874285714285 L 35.355543418897 233.1981142857143 L 37.435281267067 207.86040000000003 L 39.515019115238 190.16957142857143 L 41.594756963408 181.68417142857143 L 43.674494811578 162.9452 L 45.754232659749 165.57011428571428 L 47.833970507919 180.21980952380952 L 49.91370835609 183.41588571428574 L 51.99344620426 212.05297142857142 L 54.07318405243 217.15697142857144 L 56.152921900601 217.3757142857143 L 58.232659748771 223.1906285714286 L 60.312397596942 206.2562857142857 L 62.392135445112 197.06908571428573 L 64.471873293282 189.6865142857143 L 66.551611141453 188.33152380952382 L 68.631348989623 176.52548571428574 L 70.711086837794 152.8648 L 72.790824685964 160.33851428571433 L 74.870562534134 156.2872142857143 L 76.950300382305 154.97931428571428 L 79.030038230475 181.192 L 81.109776078646 191.10834285714287 L 83.189513926816 183.83514285714284 L 85.269251774986 188.26468571428572 L 87.348989623157 185.45748571428572 L 89.428727471327 188.17354285714288 L 91.508465319498 136.9330285714286 L 93.588203167668 111.66519047619047 L 95.667941015838 112.30622857142856 L 97.747678864009 90.55954285714287 L 99.827416712179 77.56257142857146 L 101.90715456035 101.60150000000002 L 103.98689240852 108.73342857142859 L 106.06663025669 112.8166285714286 L 108.14636810486 155.23451428571428 L 110.22610595303 172.6428 L 112.3058438012 193.19247619047619 L 114.38558164937 181.68417142857143 L 116.46531949754 174.83022857142856 L 118.54505734571 169.9632 L 120.62479519388 139.8131428571429 L 122.70453304205 104.68668571428569 L 124.78427089022 98.7806285714286 L 126.86400873839 77.32560000000001 L 128.94374658656 86.05708571428573 L 131.02348443474 106.01737142857141 L 133.10322228291 139.63085714285717 L 135.18296013108 165.64302857142857 L 137.26269797925 203.9959428571429 L 139.34243582742 225.0165238095238 L 141.42217367559 229.71645714285714 L 143.50191152376 214.53205714285716 L 145.58164937193 202.95691428571428 L 147.6613872201 202.40550000000002 L 149.74112506827 194.35302857142858 L 151.82086291644 199.6757714285714 L 153.90060076461 218.81577142857145 L 155.98033861278 170.11814285714283 L 158.06007646095 146.13845714285713 L 160.13981430912 143.02137142857143 L 162.21955215729 142.96668571428572 L 164.29929000546 170.91108571428572 L 166.37902785363 238.90821428571428 L 168.4587657018 247.50754285714288 L 170.53850354997 250.5517142857143 L 172.61824139814 248.1273142857143 L 174.69797924631 241.14880952380952 L 176.77771709448 239.7057142857143 L 178.85745494265 227.21914285714286 L 180.93719279082 220.74800000000005 L 183.016930639 218.67450000000002 L 185.09666848717 226.52645714285717 L 187.17640633534 225.87022857142858 L 189.25614418351 224.4484 L 191.33588203168 209.50097142857143 L 193.41561987985 210.79520000000002 L 195.49535772802 216.39137142857146 L 197.57509557619 216.08148571428572 L 199.65483342436 239.23177142857145 L 201.73457127253 260.1824761904762 L 203.8143091207 255.78331428571428 L 205.89404696887 258.0801142857143 L 207.97378481704 264.7882285714286 L 210.05352266521 268.3245714285714 L 212.13326051338 278.69207142857147 L 214.21299836155 260.8690857142857 L 216.29273620972 257.6426285714286 L 218.37247405789 247.74451428571427 L 220.45221190606 241.39185714285713 L 222.53194975423 247.8721142857143 L 224.6116876024 242.53114285714287 L 226.69142545057 237.15371428571427 L 228.77116329874 237.40435714285712 L 230.85090114691 230.24508571428572 L 232.93063899508 214.47737142857142 L 235.01037684326 214.25862857142857 L 237.09011469143 211.25091428571432 L 239.1698525396 211.92537142857145 L 241.24959038777 225.14108571428574 L 243.32932823594 222.46148571428571 L 245.40906608411 214.69611428571432 L 247.48880393228 210.9957142857143 L 249.56854178045 208.26142857142855 L 251.64827962862 208.4984 L 253.72801747679 222.58908571428572 L 255.80775532496 235.71821428571428 L 257.88749317313 248.94760000000002 L 259.9672310213 243.31497142857143 L 262.04696886947 243.18737142857142 L 264.12670671764 241.07285714285715 L 266.20644456581 199.35980952380953 L 268.28618241398 153.32051428571432 L 270.36592026215 153.9038285714286 L 272.44565811032 157.13028571428575 L 274.52539595849 157.03914285714288 L 276.60513380666 203.68605714285712 L 278.68487165483 236.33342857142856 L 280.764609503 193.58742857142857 L 282.84434735117 93.58852380952382 L 284.92408519934 82.84885714285713 L 287.00382304752 67.02645714285711 L 289.08356089569 63.39897142857143 L 291.16329874386 81.46348571428572 L 293.24303659203 48.89814285714283 L 295.3227744402 45.425599999999974 L 297.40251228837 48.34217142857142 L 299.48225013654 41.178342857142866 L 301.56198798471 88.39034285714288 L 303.64172583288 131.1363428571429 L 305.72146368105 144.57080000000002 L 307.80120152922 171.54908571428575 L 309.88093937739 182.49838095238098 L 311.96067722556 165.97114285714287 L 314.04041507373 158.35160000000002 L 316.1201529219 156.54697142857142 L 318.19989077007 139.50325714285717 L 320.27962861824 173.17142857142858 L 322.35936646641 184.49137142857145 L 324.43910431458 192.78537142857144 L 326.51884216275 205.89171428571427 L 328.59858001092 226.45961904761904 L 330.67831785909 226.14365714285714 L 332.75805570726 187.59022857142855 L 334.83779355543 136.82365714285714 L 336.9175314036 84.17042857142857 L 338.99726925177 71.20080000000002 L 341.07700709995 71.54714285714289 L 343.15674494812 107.36628571428571 L 345.23648279629 142.54742857142858 L 347.31622064446 219.472 L 349.39595849263 221.98754285714284 L 351.4756963408 232.12262857142858 L 353.55543418897 196.10297142857144 L 355.63517203714 189.8657619047619 L 357.71490988531 183.3612 L 359.79464773348 151.1695428571429 L 361.87438558165 147.56028571428575 L 363.95412342982 156.9252142857143 L 366.03386127799 161.23171428571428 L 368.11359912616 162.52594285714287 L 370.19333697433 192.11091428571427 L 372.2730748225 166.75497142857142 L 374.35281267067 140.78533333333337 L 376.43255051884 122.47777142857143 L 378.51228836701 57.63874285714286 L 380.59202621518 45.49851428571429 L 382.67176406335 48.282928571428556 L 384.75150191152 44.09491428571431 L 386.83123975969 50.456685714285754 L 388.91097760786 86.95028571428574 L 390.99071545603 65.01523809523815 L 393.07045330421 75.15639999999999 L 395.15019115238 87.05965714285716 L 397.22992900055 119.59765714285712 L 399.30966684872 228.58628571428574 L 401.38940469689 235.14857142857144 L 403.46914254506 189.12142857142857 L 405.54888039323 157.8412 L 407.6286182414 154.45068571428573 L 409.70835608957 154.396 L 411.78809393774 157.51308571428572 L 413.86783178591 220.71154285714286 L 415.94756963408 242.7498857142857 L 418.02730748225 241.69262857142857 L 420.10704533042 246.54142857142858 L 422.18678317859 243.4608 L 424.26652102676 229.26074285714287 L 426.34625887493 212.47222857142856 L 428.4259967231 208.7855 L 430.50573457127 207.75102857142858 L 432.58547241944 213.5659428571429 L 434.66521026761 214.9513142857143 L 436.74494811578 225.6697142857143 L 438.82468596395 217.53977142857144 L 440.90442381212 211.85245714285713 L 442.98416166029 213.67531428571428 L 445.06389950847 212.74565714285717 L 447.14363735664 216.1452857142857 L 449.22337520481 234.18245714285712 L 451.30311305298 237.66411428571428 L 453.38285090115 236.20582857142858 L 455.46258874932 248.3825142857143 L 457.54232659749 243.93474285714285 L 459.62206444566 242.31240000000003 L 461.70180229383 249.7678857142857 L 463.781540142 259.17990476190477 L 465.86127799017 266.84805714285716 L 467.94101583834 273.7566857142857 L 470.02075368651 267.0121142857143 L 472.10049153468 260.75971428571427 L 474.18022938285 256.18434285714284 L 476.25996723102 257.9889714285714 L 478.33970507919 258.99154285714286 L 480.41944292736 231.2112 L 482.49918077553 216.85923809523808 L 484.5789186237 214.09457142857144 L 486.65865647187 209.4098285714286 L 488.73839432004 211.70662857142855 L 490.81813216821 231.68514285714286 L 492.89787001638 225.81554285714287 L 494.97760786455 223.82862857142857 L 497.05734571273 218.76108571428574 L 499.1370835609 223.5005142857143 L 501.21682140907 235.13338095238095 L 503.29655925724 237.68234285714286 L 505.37629710541 244.08057142857143 L 507.45603495358 251.66365714285712 L 509.53577280175 248.6605 L 511.61551064992 247.01537142857143 L 513.69524849809 221.34954285714286 L 515.77498634626 149.43782857142855 L 517.85472419443 141.89120000000003 L 519.9344620426 143.51354285714288 L 522.01419989077 147.23217142857143 L 524.09393773894 188.06417142857143 L 526.17367558711 216.95645714285715 L 528.25341343528 197.30909523809524 L 530.33315128345 196.1941142857143 L 532.41288913162 204.21468571428574 L 534.49262697979 203.55845714285715 L 536.57236482796 228.65464285714285 L 538.65210267613 231.6486857142857 L 540.7318405243 219.83657142857146 L 542.81157837247 208.47409523809526"
          stroke="#56bd9f"
          strokeWidth="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
      </G>
      <G transform="translate(46,45) scale(1 1)" clip-Path="none" />
    </G>
    <G>
      <Text
        x="59.369743309667"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="middle"
        transform="translate(0,0)"
        y="383"
        opacity="1"
      >
        2015
      </Text>
      <Text
        x="167.81321682141"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="middle"
        transform="translate(0,0)"
        y="383"
        opacity="1"
      >
        2016
      </Text>
      <Text
        x="276.55379574003"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="middle"
        transform="translate(0,0)"
        y="383"
        opacity="1"
      >
        2017
      </Text>
      <Text
        x="384.99726925177"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="middle"
        transform="translate(0,0)"
        y="383"
        opacity="1"
      >
        2018
      </Text>
      <Text
        x="493.44074276352"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="middle"
        transform="translate(0,0)"
        y="383"
        opacity="1"
      >
        2019
      </Text>
    </G>
    <G>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="362"
        opacity="1"
      >
        0%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="316"
        opacity="1"
      >
        5%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="271"
        opacity="1"
      >
        10%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="225"
        opacity="1"
      >
        15%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="180"
        opacity="1"
      >
        20%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="134"
        opacity="1"
      >
        25%
      </Text>
      <Text
        x="31"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="89"
        opacity="1"
      >
        30%
      </Text>
      <Text
        x="0"
        style={{ color: "#666666", fontSize: "11", fill: "#666666" }}
        textAnchor="end"
        transform="translate(0,0)"
        y="-9999"
      >
        35%
      </Text>
    </G>
    <G transform="translate(0,0)">
      <G transform="translate(0,10)">
        <Text x="46" y="15" style={{ color: "#666666", fill: "#666666" }}>
          Zoom
        </Text>
        <G transform="translate(158,0)">
          <Rect fill="none" x="0" y="0" width="32" height="22" rx="2" ry="2" />
          <Text
            x="4.59375"
            style={{ fontWeight: "normal", color: "#333333", fill: "#333333" }}
            y="14"
          >
            YTD
          </Text>
        </G>
        <G transform="translate(232,0)">
          <Rect
            fill="rgb(225, 243, 239)"
            fillOpacity=" .50"
            x="0"
            y="0"
            width="32"
            height="22"
            rx="2"
            ry="2"
          />
          <Text
            x="8.6640625"
            style={{ fontWeight: "bold", fill: "#000000" }}
            y="14"
          >
            All
          </Text>
        </G>
      </G>
      <G transform="translate(331,10)">
        <G transform="translate(0,0)" fill="#666666">
          <Text x="2" y="14" style={{ fontSize: "12", fill: "#666666" }}>
            From
          </Text>
        </G>
        <G transform="translate(38,0)">
          <Rect
            fill="none"
            x="0.5"
            y="0.5"
            width="94"
            height="21"
            stroke="#cccccc"
            strokeWidth="1"
          />
          <Text
            x="11.9140625"
            y="14"
            style={{ fontSize: "12", fill: "#333333" }}
          >
            <Tspan>Nov 17, 2014</Tspan>
          </Text>
        </G>
        <G transform="translate(142,0)" fill="#666666">
          <Text x="2" y="14" style={{ fontSize: "12", fill: "#666666" }}>
            To
          </Text>
        </G>
        <G transform="translate(165,0)">
          <Rect
            fill="none"
            x="0.5"
            y="0.5"
            width="94"
            height="21"
            stroke="#cccccc"
            strokeWidth="1"
          />
          <Text
            x="11.9140625"
            y="14"
            style={{ fontSize: "12", fill: "#333333" }}
          >
            <Tspan>Nov 22, 2019</Tspan>
          </Text>
        </G>
      </G>
    </G>
  </Svg>
);

export default Svg2;
