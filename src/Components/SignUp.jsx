import React, { useState } from 'react'
import { useFirebase } from '../context/Firebasecontextprovider'


// const auth = getAuth(app);
const SignUp = () => {

  const firebase = useFirebase();
  console.log(firebase);
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();

      firebase.CreateUser(email,password);
    }

    

  return (
    <div className="bg-white w-screen font-sans text-gray-900">
      <div className=" ">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
            <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
              Sign up
            </h1>
            <div className="text-lg sm:text-xl">
              <div className="">
                <p className="mb-4">Let's do this!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
        <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" forhtml="email">
              E-mail
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
              id="email"
              type="email"
              placeholder="email"
              required
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <span className="my-2 block"></span>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" forhtml="password">
              Password
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
              id="password"
              type="password"
              placeholder="******************"
              required
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </div>
    
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp












    //   <div className="mb-4">
    //         <label className="mb-2 block text-sm font-bold" for="country">
    //           Country
    //         </label>
    //         <select
    //           className="shadow-sm mb-3 cursor-pointer w-full appearance-none rounded border border-gray-300 py-2 px-3  leading-tight outline-none ring-blue-500 focus:ring"
    //           id="country"
    //           required=""
    //         >
    //           <option value="AF" className="">
    //             Afghanistan
    //           </option>
    //           <option value="AL" className="">
    //             Albania
    //           </option>
    //           <option value="DZ" className="">
    //             Algeria
    //           </option>
    //           <option value="AS" className="">
    //             American Samoa
    //           </option>
    //           <option value="AD" className="">
    //             Andorra
    //           </option>
    //           <option value="AO" className="">
    //             Angola
    //           </option>
    //           <option value="AI" className="">
    //             Anguilla
    //           </option>
    //           <option value="AG" className="">
    //             Antigua and Barbuda
    //           </option>
    //           <option value="AR" className="">
    //             Argentina
    //           </option>
    //           <option value="AM" className="">
    //             Armenia
    //           </option>
    //           <option value="AW" className="">
    //             Aruba
    //           </option>
    //           <option value="AU" className="">
    //             Australia
    //           </option>
    //           <option value="AT" className="">
    //             Austria
    //           </option>
    //           <option value="AZ" className="">
    //             Azerbaijan
    //           </option>
    //           <option value="BS" className="">
    //             Bahamas
    //           </option>
    //           <option value="BH" className="">
    //             Bahrain
    //           </option>
    //           <option value="BD" className="">
    //             Banglades
    //           </option>
    //           <option value="BB" className="">
    //             Barbados
    //           </option>
    //           <option value="BY" className="">
    //             Belarus
    //           </option>
    //           <option value="BE" className="">
    //             Belgium
    //           </option>
    //           <option value="BZ" className="">
    //             Belize
    //           </option>
    //           <option value="BJ" className="">
    //             Benin
    //           </option>
    //           <option value="BM" className="">
    //             Bermuda
    //           </option>
    //           <option value="BT" className="">
    //             Bhutan
    //           </option>
    //           <option value="BO" className="">
    //             Bolivia
    //           </option>
    //           <option value="BA" className="">
    //             Bosnia-Herzegovina
    //           </option>
    //           <option value="BW" className="">
    //             Botswana
    //           </option>
    //           <option value="BV" className="">
    //             Bouvet Island
    //           </option>
    //           <option value="BR" className="">
    //             Brazil
    //           </option>
    //           <option value="IO" className="">
    //             British Indian O. Terr.
    //           </option>
    //           <option value="VG" className="">
    //             British Virgin Islands
    //           </option>
    //           <option value="BN" className="">
    //             Brunei Darussalam
    //           </option>
    //           <option value="BG" className="">
    //             Bulgaria
    //           </option>
    //           <option value="BF" className="">
    //             Burkina Faso
    //           </option>
    //           <option value="BI" className="">
    //             Burundi
    //           </option>
    //           <option value="KH" className="">
    //             Cambodia
    //           </option>
    //           <option value="CM" className="">
    //             Cameroon
    //           </option>
    //           <option value="CA" className="">
    //             Canada
    //           </option>
    //           <option value="CV" className="">
    //             Cape Verde
    //           </option>
    //           <option value="KY" className="">
    //             Cayman Islands
    //           </option>
    //           <option value="CF" className="">
    //             Central African Rep.
    //           </option>
    //           <option value="TD" className="">
    //             Chad
    //           </option>
    //           <option value="CL" className="">
    //             Chile
    //           </option>
    //           <option value="CN" className="">
    //             China
    //           </option>
    //           <option value="CX" className="">
    //             Christmas Island
    //           </option>
    //           <option value="CC" className="">
    //             Cocos (Keeling) Islands
    //           </option>
    //           <option value="CO" className="">
    //             Colombia
    //           </option>
    //           <option value="KM" className="">
    //             Comoros
    //           </option>
    //           <option value="CG" className="">
    //             Congo (Brazzaville)
    //           </option>
    //           <option value="CK" className="">
    //             Cook Islands
    //           </option>
    //           <option value="CR" className="">
    //             Costa Rica
    //           </option>
    //           <option value="HR" className="">
    //             Croatia
    //           </option>
    //           <option value="CU" className="">
    //             Cuba
    //           </option>
    //           <option value="CY" className="">
    //             Cyprus
    //           </option>
    //           <option value="CS" className="">
    //             Czech Republic
    //           </option>
    //           <option value="CD" className="">
    //             Democratic Republic of Congo (Kinshasa-Zaire)
    //           </option>
    //           <option value="DK" className="">
    //             Denmark
    //           </option>
    //           <option value="DJ" className="">
    //             Djibouti
    //           </option>
    //           <option value="DM" className="">
    //             Dominica
    //           </option>
    //           <option value="DO" className="">
    //             Dominican Republic
    //           </option>
    //           <option value="EC" className="">
    //             Ecuador
    //           </option>
    //           <option value="EG" className="">
    //             Egypt
    //           </option>
    //           <option value="SV" className="">
    //             El Salvador
    //           </option>
    //           <option value="ER" className="">
    //             Eritrea
    //           </option>
    //           <option value="EE" className="">
    //             Estonia
    //           </option>
    //           <option value="ET" className="">
    //             Ethiopia
    //           </option>
    //           <option value="EU" className="">
    //             European Union
    //           </option>
    //           <option value="FK" className="">
    //             Falkland Isl., Malvinas
    //           </option>
    //           <option value="FO" className="">
    //             Faroe Islands
    //           </option>
    //           <option value="FJ" className="">
    //             Fiji
    //           </option>
    //           <option value="FI" className="">
    //             Finland
    //           </option>
    //           <option value="FR" className="">
    //             France
    //           </option>
    //           <option value="GF" className="">
    //             French Guiana
    //           </option>
    //           <option value="PF" className="">
    //             French Polynesia
    //           </option>
    //           <option value="TF" className="">
    //             French Southern Terr.
    //           </option>
    //           <option value="GA" className="">
    //             Gabon
    //           </option>
    //           <option value="GM" className="">
    //             Gambia
    //           </option>
    //           <option value="GE" className="">
    //             Georgia
    //           </option>
    //           <option value="DE" className="">
    //             Germany
    //           </option>
    //           <option value="GH" className="">
    //             Ghana
    //           </option>
    //           <option value="GI" className="">
    //             Gibraltar
    //           </option>
    //           <option value="UK" className="">
    //             Great Britain - UK
    //           </option>
    //           <option value="GR" className="">
    //             Greece
    //           </option>
    //           <option value="GL" className="">
    //             Greenland (Denmark)
    //           </option>
    //           <option value="GD" className="">
    //             Grenada
    //           </option>
    //           <option value="GP" className="">
    //             Guadaloupe
    //           </option>
    //           <option value="GU" className="">
    //             Guam (US)
    //           </option>
    //           <option value="GT" className="">
    //             Guatemala
    //           </option>
    //           <option value="GG" className="">
    //             Guernsey
    //           </option>
    //           <option value="GN" className="">
    //             Guinea (Conakry)
    //           </option>
    //           <option value="GW" className="">
    //             Guinea Bissau
    //           </option>
    //           <option value="GY" className="">
    //             Guyana
    //           </option>
    //           <option value="HT" className="">
    //             Haiti
    //           </option>
    //           <option value="HM" className="">
    //             Heard and McDonald Isl.
    //           </option>
    //           <option value="HN" className="">
    //             Honduras
    //           </option>
    //           <option value="HK" className="">
    //             Hong Kong
    //           </option>
    //           <option value="HU" className="">
    //             Hungary
    //           </option>
    //           <option value="IS" className="">
    //             Iceland
    //           </option>
    //           <option value="IN" className="">
    //             India
    //           </option>
    //           <option value="ID" className="">
    //             Indonesia
    //           </option>
    //           <option value="IR" className="">
    //             Iran
    //           </option>
    //           <option value="IQ" className="">
    //             Iraq
    //           </option>
    //           <option value="IE" className="">
    //             Ireland
    //           </option>
    //           <option value="IM" className="">
    //             Isle of Man
    //           </option>
    //           <option value="IL" className="">
    //             Israel
    //           </option>
    //           <option value="IT" className="">
    //             Italy
    //           </option>
    //           <option value="CI" className="">
    //             Ivory Coast
    //           </option>
    //           <option value="JM" className="">
    //             Jamaica
    //           </option>
    //           <option value="JP" className="">
    //             Japan
    //           </option>
    //           <option value="JE" className="">
    //             Jersey
    //           </option>
    //           <option value="JO" className="">
    //             Jordan
    //           </option>
    //           <option value="KZ" className="">
    //             Kazakhstan
    //           </option>
    //           <option value="KE" className="">
    //             Kenya
    //           </option>
    //           <option value="KI" className="">
    //             Kiribati
    //           </option>
    //           <option value="KW" className="">
    //             Kuwait
    //           </option>
    //           <option value="KG" className="">
    //             Kyrgyz Republic
    //           </option>
    //           <option value="LA" className="">
    //             Laos
    //           </option>
    //           <option value="LV" className="">
    //             Latvia
    //           </option>
    //           <option value="LB" className="">
    //             Lebanon
    //           </option>
    //           <option value="LS" className="">
    //             Lesotho
    //           </option>
    //           <option value="LR" className="">
    //             Liberia
    //           </option>
    //           <option value="LY" className="">
    //             Libya
    //           </option>
    //           <option value="LI" className="">
    //             Liechtenstein
    //           </option>
    //           <option value="LT" className="">
    //             Lithuania
    //           </option>
    //           <option value="LU" className="">
    //             Luxembourg
    //           </option>
    //           <option value="MO" className="">
    //             Macau
    //           </option>
    //           <option value="MK" className="">
    //             Macedonia
    //           </option>
    //           <option value="MG" className="">
    //             Madagascar
    //           </option>
    //           <option value="MW" className="">
    //             Malawi
    //           </option>
    //           <option value="MY" className="">
    //             Malaysia
    //           </option>
    //           <option value="MV" className="">
    //             Maldives
    //           </option>
    //           <option value="ML" className="">
    //             Mali
    //           </option>
    //           <option value="MT" className="">
    //             Malta
    //           </option>
    //           <option value="MH" className="">
    //             Marshall Islands
    //           </option>
    //           <option value="MQ" className="">
    //             Martinique
    //           </option>
    //           <option value="MR" className="">
    //             Mauritania
    //           </option>
    //           <option value="MU" className="">
    //             Mauritius
    //           </option>
    //           <option value="YT" className="">
    //             Mayotte
    //           </option>
    //           <option value="MX" className="">
    //             Mexico
    //           </option>
    //           <option value="FM" className="">
    //             Micronesia
    //           </option>
    //           <option value="MD" className="">
    //             Moldova
    //           </option>
    //           <option value="MC" className="">
    //             Monaco
    //           </option>
    //           <option value="MN" className="">
    //             Mongolia
    //           </option>
    //           <option value="ME" className="">
    //             Montenegro
    //           </option>
    //           <option value="MS" className="">
    //             Montserrat
    //           </option>
    //           <option value="MA" className="">
    //             Morocco
    //           </option>
    //           <option value="MZ" className="">
    //             Mozambique
    //           </option>
    //           <option value="MM" className="">
    //             Myanmar
    //           </option>
    //           <option value="NA" className="">
    //             Namibia
    //           </option>
    //           <option value="NR" className="">
    //             Nauru
    //           </option>
    //           <option value="NP" className="">
    //             Nepal
    //           </option>
    //           <option value="AN" className="">
    //             Netherland Antilles
    //           </option>
    //           <option value="NL" className="">
    //             Netherlands
    //           </option>
    //           <option value="NC" className="">
    //             New Caledonia
    //           </option>
    //           <option value="NZ" className="">
    //             New Zealand
    //           </option>
    //           <option value="NI" className="">
    //             Nicaragua
    //           </option>
    //           <option value="NE" className="">
    //             Niger
    //           </option>
    //           <option value="NG" className="">
    //             Nigeria
    //           </option>
    //           <option value="NU" className="">
    //             Niue
    //           </option>
    //           <option value="NF" className="">
    //             Norfolk Island
    //           </option>
    //           <option value="KP" className="">
    //             North Korea
    //           </option>
    //           <option value="MP" className="">
    //             Northern Mariana Isl.
    //           </option>
    //           <option value="NO" className="">
    //             Norway
    //           </option>
    //           <option value="OM" className="">
    //             Oman
    //           </option>
    //           <option value="PK" className="">
    //             Pakistan
    //           </option>
    //           <option value="PW" className="">
    //             Palau
    //           </option>
    //           <option value="PS" className="">
    //             Palestine
    //           </option>
    //           <option value="PA" className="">
    //             Panama
    //           </option>
    //           <option value="PG" className="">
    //             Papua New Guinea
    //           </option>
    //           <option value="PY" className="">
    //             Paraguay
    //           </option>
    //           <option value="PE" className="">
    //             Peru
    //           </option>
    //           <option value="PH" className="">
    //             Philippines
    //           </option>
    //           <option value="PN" className="">
    //             Pitcairn
    //           </option>
    //           <option value="PL" className="">
    //             Poland
    //           </option>
    //           <option value="PT" className="">
    //             Portugal
    //           </option>
    //           <option value="PR" className="">
    //             Puerto Rico
    //           </option>
    //           <option value="QA" className="">
    //             Qatar
    //           </option>
    //           <option value="RE" className="">
    //             Reunion
    //           </option>
    //           <option value="RO" className="">
    //             Romania
    //           </option>
    //           <option value="RU" className="">
    //             Russian Federation
    //           </option>
    //           <option value="RW" className="">
    //             Rwanda
    //           </option>
    //           <option value="LC" className="">
    //             Saint Lucia
    //           </option>
    //           <option value="PM" className="">
    //             Saint Pierre and Miquelon
    //           </option>
    //           <option value="SM" className="">
    //             San Marino
    //           </option>
    //           <option value="SA" className="">
    //             Saudi Arabia
    //           </option>
    //           <option value="SN" className="">
    //             Senegal
    //           </option>
    //           <option value="RS" className="">
    //             Serbia
    //           </option>
    //           <option value="SC" className="">
    //             Seychelles
    //           </option>
    //           <option value="SL" className="">
    //             Sierra Leone
    //           </option>
    //           <option value="SG" className="">
    //             Singapore
    //           </option>
    //           <option value="SX" className="">
    //             Sint Maarten (Dutch part)
    //           </option>
    //           <option value="SK" className="">
    //             Slovakia
    //           </option>
    //           <option value="SI" className="">
    //             Slovenia
    //           </option>
    //           <option value="SB" className="">
    //             Solomon Islands
    //           </option>
    //           <option value="SO" className="">
    //             Somalia
    //           </option>
    //           <option value="ZA" className="">
    //             South Africa
    //           </option>
    //           <option value="GS" className="">
    //             South Georgia and South Sandwich Islands
    //           </option>
    //           <option value="KR" className="">
    //             South Korea
    //           </option>
    //           <option value="SS" className="">
    //             South Sudan
    //           </option>
    //           <option value="ES" className="">
    //             Spain
    //           </option>
    //           <option value="LK" className="">
    //             Sri Lanka
    //           </option>
    //           <option value="SH" className="">
    //             St. Helena
    //           </option>
    //           <option value="ST" className="">
    //             St. Tome and Principe
    //           </option>
    //           <option value="KN" className="">
    //             St.Kitts Nevis Anguilla
    //           </option>
    //           <option value="VC" className="">
    //             St.Vincent and Grenadines
    //           </option>
    //           <option value="SD" className="">
    //             Sudan
    //           </option>
    //           <option value="SR" className="">
    //             Suriname
    //           </option>
    //           <option value="SJ" className="">
    //             Svalbard and Jan Mayen Is
    //           </option>
    //           <option value="SZ" className="">
    //             Swaziland
    //           </option>
    //           <option value="SE" selected="" className="">
    //             Sweden
    //           </option>
    //           <option value="CH" className="">
    //             Switzerland
    //           </option>
    //           <option value="SY" className="">
    //             Syria
    //           </option>
    //           <option value="TW" className="">
    //             Taiwan
    //           </option>
    //           <option value="TJ" className="">
    //             Tajikistan
    //           </option>
    //           <option value="TZ" className="">
    //             Tanzania
    //           </option>
    //           <option value="TH" className="">
    //             Thailand
    //           </option>
    //           <option value="TL" className="">
    //             Timor-Leste
    //           </option>
    //           <option value="TG" className="">
    //             Togo
    //           </option>
    //           <option value="TK" className="">
    //             Tokelau
    //           </option>
    //           <option value="TO" className="">
    //             Tonga
    //           </option>
    //           <option value="TT" className="">
    //             Trinidad and Tobago
    //           </option>
    //           <option value="TN" className="">
    //             Tunisia
    //           </option>
    //           <option value="TR" className="">
    //             Turkey
    //           </option>
    //           <option value="TM" className="">
    //             Turkmenistan
    //           </option>
    //           <option value="TC" className="">
    //             Turks and Caicos Islands
    //           </option>
    //           <option value="TV" className="">
    //             Tuvalu
    //           </option>
    //           <option value="UM" className="">
    //             US Minor outlying Isl.
    //           </option>
    //           <option value="VI" className="">
    //             US Virgin Islands
    //           </option>
    //           <option value="UG" className="">
    //             Uganda
    //           </option>
    //           <option value="UA" className="">
    //             Ukraine
    //           </option>
    //           <option value="AE" className="">
    //             United Arab Emirates
    //           </option>
    //           <option value="US" className="">
    //             United States
    //           </option>
    //           <option value="UY" className="">
    //             Uruguay
    //           </option>
    //           <option value="UZ" className="">
    //             Uzbekistan
    //           </option>
    //           <option value="VU" className="">
    //             Vanuatu
    //           </option>
    //           <option value="VA" className="">
    //             Vatican City State
    //           </option>
    //           <option value="VE" className="">
    //             Venezuela
    //           </option>
    //           <option value="VN" className="">
    //             Vietnam
    //           </option>
    //           <option value="WF" className="">
    //             Wallis and Futuna Islands
    //           </option>
    //           <option value="EH" className="">
    //             Western Sahara
    //           </option>
    //           <option value="WS" className="">
    //             Western Samoa
    //           </option>
    //           <option value="YE" className="">
    //             Yemen
    //           </option>
    //         </select>
    //       </div>
    //       <div className="mb-6">
    //         <label className="mb-2 flex text-sm">
    //           <input type="checkbox" name="accept" className="mr-2" required="" />
    //           <div className="text-gray-800">
    //             <p className="">
    //               I accept the
    //               <a href="#" className="cursor-pointer text-blue-500 underline">
    //                 terms of use
    //               </a>
    //               and
    //               <a href="#" className="cursor-pointer text-blue-500 underline">
    //                 privacy policy
    //               </a>
    //             </p>
    //           </div>
    //         </label>
    //       </div>