import { Link } from "react-router-dom";

const games = [
    { 
        id: 1, 
        name: 'Grand Theft Auto V', 
        description: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp6BbANU9yNl1ZfRvYLoNCB0ZBxEAk7i9Yw&s', 
        reviews: [
            { text: "Amazing gameplay!", author: "julius" },
            { text: "Very immersive.", author: "niebla" },
            { text: "Very nice.", author: "niebla2" },
            { text: "Very bad.", author: "niebla3" },
            { text: "Very very godly.", author: "niebla4" }
        ]
    },
    { 
        id: 2, 
        name: 'Minecraft', 
        description: 'Minecraft is a 2011 sandbox game developed and published by Swedish video game developer Mojang Studios.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyDPsfbm5rschQxGa97FysRMsDeeDM4W1oQ&s', 
        reviews: [{ text: "So creative!", author: "phil" }]
    },
    { 
        id: 3, 
        name: 'Hitman 3', 
        description: 'Hitman 3 is a 2021 stealth game developed and published by IO Interactive.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9abrDULsYo4efIzl6tL4D1rmFz79ziyV1Hg&s', 
        reviews: [{ text: "Fast-paced action!", author: "james" }]
    },
    { 
        id: 4, 
        name: 'Call of Duty: Warzone', 
        description: 'Call of Duty: Warzone was a 2020 free-to-play battle royale first-person shooter game developed by Raven Software and Infinity Ward and published by Activision.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQontdbON1-xDkbajIpQ0tivSp4yY4AQqjlGw&s', 
        reviews: [{ text: "Challenging and rewarding.", author: "didy" }]
    },
    { 
        id: 5, 
        name: 'Diablo IV', 
        description: 'Diablo IV is a 2023 online-only action role-playing dungeon crawling game developed and published by Blizzard Entertainment.',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUWFRUVFxUVFRYVFxcVFRUXFxYYFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADYQAAEDAgQDBgUDBQEBAQAAAAEAAhEDIQQSMUEFUWEicYGRobEGEzLB8FLR4RRCYnLxI+KC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgICAgEEAwEBAAAAAAAAAAECEQMhEjFBBBMiUWGBsfAj/9oADAMBAAIRAxEAPwD41CmEQaiAUrK0LhRCbCghazULhdCIhRCIDgocpULGOhH8tAFOZYxzmBMwlMF1+aWw2JTMK3f8koPoy7LtZwkAaNsOvMoQEARZlGilklLcmMEmBr79EtyKMLcgKY4ICE4rFFE1MZRJBPdbnrp3QhhEAQRtSmgnS/cikhK0FMsNUlJeYAM3O3L+Uv5yHFh5FgosYGuGbc6jruq4rLnOkQsk7DZWa0I8g1UU+SFjlUkE5qFTK6FgklQuClYxELoUhEAsEGFxTAF0IWahRCB4TyEp7UUwNDVIUKUAnSoJXFQVjArguP4FyIDlzioJULGOAUwuaJuuqOWAdQF/Mq89mUBvLX/Y6+Vh4JeAbAzn8j+SFMypydsdKkSoXEoKhsVjEVawG/kjpcSaDOSe0DqNAII03WeL6ztomNDOR3vbkrKKSJts3mY+g6AWn6YIIaY5ZPpuBzInc6IKopOOUj5b9nSGscJjM8XycpHZ1MrLY1v6lvcK4WagLSRl2JEieh2KDijJsx3sjM0yJiNCNY2+qeisNbTZBdle4xFPMYB/zy840BJ5i9tPF/B9UVGMpkltUkAm+UgFzp/VYEjQ7HmbOJ+GzRBDXXjkM0DXtcunWFnRlZlVMcxurQTILwBlk8hEZGi1jmuAYEKjiuLFxPZbBBbeSbw4nX6uqDEUmtMTO9tFXcW7Ce89CikgbJdi8xuNeW3goISnf6+R53/dNw7CQYkxfuG5KEkGLICMLgFOXYX6JBgCgaNkbgodzTIBBC4FERIQomCK71QhEgE4ImlD3+an8lYwcrkKkIBOS3phQPWRmTKlcAilYxEc0JKKFOVY1AAKHFE5yCEQEBG1sqabU9rEGwpCiIVd/uVYru9UOEb2i79At/sbNCy0rB5LlWGtDR+Rb3zeQUMe0DtA941HeNx0seqnENh2X9IDfEC/rKVUbY9ymh2FWplsExBEggggjw36Ku+paCY8L267dwQVKjgxrSTbtATa+8TE39VXaCfNVUaJtjmVG/pB750jvRhzDtHtzOyinRZN3bbeSirQAg03Zp2i/kPFHkbiW6WGLnDLf+d1734f4S1jRJOY2gHc8wvA8Hc+RAlpJHce7xVx/E6jXGJGU66FJJyukh4xjVtn2qng2ANPZJb2ri7SRFvAlY/H8Ax/1ac5gC2/Nee+HOO1KtGqT/Yy3V3LrsvL4/4grVXHYDYmAI790OUn0jKCXcgOM8KLHmCHN1kEGRzssioWiRr7DU6rWrfPqUc0RJiSsKnQmS4wydeeunNNGT8glFeNhOxXKN9uYuop4gTpfSQYOl78k2p8sghjCY3vOw+/oqxaJsDafRMnYjVFqk2SBIEmJJAA7yU4YjLmaw2iCYALtJmCezMwBY7rOpOLYnvV1lLVwuDBnry9UrpBWxJCgpjwhY2bc/fZawnUkVSmlMd+xVxt1m6MtlQhQCrD6aQsnZmqCXQoaUwBYIPouIRFqjRYwJKB5TSEuoLooDGgKYUwuKUY6FzzCglBMrJGbBAKJjJUgKxTZZZsCQDQicUWRKqFKtjdFeqd1o8KpQaYOk/Md3AWHlPms+lTLnBo3PotZpj5p5AMHnB9CVsj1RoLdlZ0kknUkk95uheYaTrY9UTCic3pOtktmMt8uPmPHZEy5DQdQA4xp15onU3Ai2pA6h2x8df+LbwWGbTb9bM51c2rDpGwMeypKaSFjG2UW4V0GGsaNw8tLtrn9IPWyqV6Za7K5uR40jS9rd/ML0hpMZdz3VHWcGucHASd5ZbTS2vVYHGsSXOAJu2dgIm8WCnjk5MpNKKNXgeT6m3cfqbyPd916PCUaLzdg1vsSvD8Er5XyLGRC9LgsQZndaTlGf4DGMZQvyX6nEm0alRjaZAywBlEHcNb1P3V3AfKLA80xP8AkACRpfmvL1G4qo4ucS2dBmGnL6gtHh3zwMtXbQzNuRRurdm42lot498tdYBgHcI1PsV4mvVpZyWtzMFmtNgT1HLXzXoOKYs5HSezIEddvb1XkATNvRbFylfIGXjGlE2WYZ8NzVMkiwANhtpvc6SboMbgHkSMpIJEsIEtF+03XMtDB4zO3tXBsWknlHNEaNNpDqYMx/a1sgnq53sEvNp7NxTR52M1wL2ETPj6J+Evm5a+sD7rTx/CXvcHUmPl5ymQ3SJkRoLHVLGEdTlrgRpYggwNNvHxTPJFrQvBp7KjmIMkXVp7UotRTA0IxDIceRuPf7plMptenLGnlIVamUbtA6ZYclPYnNCnIhdDUU4RUyje2CgIT9i9DSFBCBrtkaFBIISnp6VVF1kBjkDiue9KJWSC2SSpaFDQnMYi2BImnTTw1c0IgpNlEhbyqtY2Vp6o17mB3J4CSL/A2R8yu7RgMd+yKg3sE83D2d/CbjWhlJlFvRzz/kdB4fZMoCWf/o+yi5Xch0vAAap+WrDKaaKKRyHURbKrg3KA2LH6GEyDIMkTqifXqO1cfC3sirMysc47AlHh2GATqQPZJa7GrwIpslYGMoEPcD+o+69g3DTdZ2LwL21C4MztdcjlA67yqYcyUtiZcbaMPB4d2aQDYE6TEaz4L0GFadQR1EwR3hXMDRgTlLZO+WY8D38u5ZeNaWvdIgzfrNwQi5vJJpeAxShFNm7g8S0TIBMb3SqhLtC0eKyKD7XSa1eNChc3qx/+a3QzitBzpa3tASSW6EgAxMdywjhzoRfun0XveA0pot7MAyQT/deCY5WjwVLG8Iqy7IGNBm+YkxHUCD/F1sXqFGTjITJhckpIxeFUYaZ5xHcB+5V75NldwOADB2hc3P8AsdU2rRB0U55eUh446RkOw3RB8qFfw7v/AEqscbtLSB/iWN+8+a6rRW5NPYONmY9iS5i0H0kp9PoqKQjiIptlhb1/ZZYs6D3LXyx5rP4pShwcNHX8VXG90JJasOmU4BV6RkBWWrSMhVRirvariVUajFmaKiNjlz2pZVOyfRZCXV1UMeueUK2NeiHLsqIBEAtYKIaE9gQhG1I2Og2hSpBS3HYalKMLxFSEPB2AvzO/tukV3eitcMEMcefZHjr6e6eWoE07kNq3BJ/uP3V3At7B/wBvsk1GWb3K5wlsh46tPuFCT+JWK2EAntgAl0AC5J0TTSAWXh6f9VULS7LRZcxq68DxJ0HikSvfgZuivisQcQ8UadmTLncwNT3e5hb4om0aKKWHY0kMbA08Bp4LQw7OiTJNVSWhoR8sPD0rJ39OrFKmjIXE5bOlGccKZsvKcWeTWdaLgeG3p7r13EMbla/JdzRJ/wAf/rkF4OqHTmdrvPMACe79l3+ji75M5fUNVSH08WGjLGbkZ3/NlSLzOZ0G57h4KX1bReBrBsRIiRffv20KEGdIE+nuu9RXZycn0e++HnZqLLRlEDqJkEefotOuwQvHfDPEntcWXLcoMbgARLeZ6dV6YY5riAHAyCR1A1jqJC8fPilGbPRxZE4iatJJbRIV3FG0jZLpuDrrJujPs85x/AVARiaU5miHAbtG8b9enchwHE21YaRlfy2P+p+y9aCIXn+LcHpuHZblcT2SNM2oHQGNtCrwyKS4y/TJyg07ic6lCQ6klcLxzjNOr9Y0JtmjUH/IKy9aScXTCmmihim6dVVxNOWOB1FwreMd2wOQSX/UW/qbHjt6wqRfROS7MXCVNloNKzGiHEK7TdadtF1TRCLHlARzRtKF6mOIelFqsFLcJTpitCYXOKYQlPToUsEdFAT52KW5inY1B/LKkBC15TKbhuPHkldjIlxsqz3bpr3KtVKaKBJiap9brTwtOXMZyEnvNz9lQoNl/wCbLT4dcl25k/stkdIEFbLdZnsu4c/LUgmAQRPsmlot3KrWZdc0Xei8lWzR4gHFjmgtE2JccoA3un/0DqGFGWCSc5O5ImO4BVMPiw+AZDhuIk9RIgOWq7G0/lEVWuLGi5LnOeLy65O/IQg+Spfkyp7MDBfEo0qU7jdpmT3HRXX/ABJH0UjPN7gI6kCfdefxeIY6o40xlZPZBuQAIJJ8/NVWVSSY+mCPCV1exCW2jn92S1Z7DCfFJLe2xsgXLXECegI+6XjeI1C1rnvyyRlYz6iTvMQCvM0Yce04NaLnU+Q3KTUrOdYFzgNJER4Jo+nxRdpGeabVNnqGPBcaVN8gTNrDvO5ROwBAuGkW6eqyuG4nK0QMvPqrdTiJhNQEzNxmFAeW+W++hJvzv+G3h8ADYAG259lWsQ50mRc87uAEc9U7BVjpodzdOIXW0zRBdExqBr3hLrYyk99MgxmmXNEODtBIn1SK1eDYrJqsJJOWEUgNnpK/FalP/wA2Paf8nN1B8bH0WYziVZszUeINxAOuhEzA/hU2VqZYQcweLgkhzXDkdweSQX5xBS+1D6D7kvs3qPH6jWF8tqQYh0NcLm9hDh3Qo4ZxKvXqjOcrRoA0ga685Xns8W/CvXfBuJJlrmNsA5ji0TYlp7UTP0i/Rc+WEYRbSLY5uTSbLHGeEBtQVQ4h0Nccjc22pG1tUrFOyguPgr3E6lJsOqAOcCcsgZ+dnaxfdedxGINR0nwGwC5oJySsvJqPRFO5lFxCmcuYG4P2EI8OyyZiW2Pcnv5IFfEwMb9eYaOg+eqmm7b8uirN7MfpPoUlh0XWujm8l2k7ZMqXSGOT2uF9+X7qbKIWWoKjYR50BusrAwAgqMPJWWthKrG6ZMVoY0FNDVDE4JGx0is9kIqTZnmrEJFWnFwtd6NVFcnVV3uunucb+KrkKsRGHhzEnmI81rYR9gPz8sspoW22jEQZkNcPL91LM0PjRZp6HwPglOp6p9SDEDQJU9LLliy8im6n4IsbjopOY6TmEA30BE38fVP+YBqJ6KnxKmKjexYNl2U9NT5Aq8XbVkZKk6Mh7m6AROsaDoPRE02MaCPNW8Nw4teC/LDiYH1HLu62nTeVQqwC4AyMxAPMA2K6lJPSINNdiyU3DVQ1IKJmqcUtUcRcm56cldpYjcthVKbIv/CtloidbAi/OP3SSkkdOLBKabTWgqbxqhqPvIGi6BE7R68lxKVTsOTA4VfnYiviCZBbbmkNxECNf2T6rc1p01HUqriABpHn7qqZzzjToWXLmOgoCVBKYQeQ5wJAnLcmNAJv3K1wrH1GPaWuLZOUloGhibG22qnAuY6nUYRD5a5rtLQWuB6ElvvsnjDsa0PaDAkuBgw4wMvd3qE5J2mikYvtFuuXOMmSetypo0UGHxIdcfngrbegXNJtaOhJPYykyEiq6PzyThe8aLsXc2FvwKN/Ip4MSu656j+VRC0uI0spaJnsgnoTeFQcLrug7RyyWx1N1lYotkEnQKpTMSFYpgmyEkGLOATmshNbTAUqbkPRXeFWqgyrr1Vrap4sVj2prUlqaxIwocApIUNK5zkg5nYpkKsreNdoqzBvyXRHojLsMC4C06VQgW0NvusylzTzUIbBNpnxSTjehoujV/rGhsEEOB+rpulYriYFmm3WJWNUxDjbZJgblLHAvIZZX4L+J4qSIyjvUcLefmAuOl4j6ubTe0ifJZ8jv7k0PdI2iD5XVeCSpE+Tu2anHWfLOemYaSAGky4WmdPpkDntdZnCsCKzww1qdImMpq5w0nlLGmD32RcYxGd46NA/PCEPCRFVjiYDHNcTIEQ4G07psSqKsE3ctGxS+EnOxBwoxWG+cCWlh/qNWgkw75OWwB3WRgcA6pWbhwQ176gpjNmAzl2UAwCRfotpnE2U8a/GhzXdtz20wTLnPBBkxAFySZ3WRgcZlxDa75JbUFU5dS4Oz79VQVA46iaVR9JzmuLHOYS2S2WmDEgEiQdlv4T4fq1MI7EscwsptJLTmDyGBpcQMsGAQdbbrFrs+dVfUEjPUc6Iv23Tz2lepbxb5RAYwZKbDh4vcOkVYBMAuMuPcLqU3HV/Z24FNxko/Tf6RgcPo5zlLmsBIu6YE84BOy1cR8PVGioXVaJFJrXOg1bh4lgbNMBxI5HQHkqGFY3NAzZSYHPmLTBOm69A/jn/AKvr9s5xBpGGsPYDJdBMm3JRUo27Or25ThDirq7/AFv+HjsNhjVxDabHNa57wwF85cxOUTlBOsDRV+J4J1GrUouILqb3McWzGZpgxmAMT0Wlwtvy6rK78wbTe2pYAklpBAAJGsJPFcRRqvrVZqZ6j3PALGgAlxMSHmddY2XTBqtHmZdybfkTw3g9Ssx9WW06VKM9WoSGAu+lvZBc5x5NBKt8R+HXUqFPE/NY+lUOVpaKhuNZIaWtOvZcQ6xsgwvEpwj8GSGzWbXa4/SXBuUtJ2tcFWWcSNPA1MG1zX/Ne2q7LMMy5bT/AHE5G6WTEqPPSvUV8TT+SxzJAMCHfqAOY77+wXmCJVzCvloaZ7JPk7/h81LJG6ZSEqsinW+W6QJC1KXFz0HRVX4IOHZ8lTOFc3UJGoT77CpSj0ejbj6ZLZk/qFrnpCVVxJJMWmRHQmYWCxxabK1QxJmd9pU3gS2iiy2HjFVqBPqDmkjQhWjpE5dkU9VqYdkBZdIwR3rUpuSZBoDYS3phKW8qSHYpyrVtVYcq1XVViIxoKaCkAomuWaMWMyB1RRmS3lKkFsTWMlKOiYUtysiZwqQozLgxEGI6MDlJ0Cj+n/UfBPYw6iAnUaUmdUrnQVGxAaGxDdedkuo28TfeL5RuStb5sG29iCAQRyINj4plfH1GUKlNhY0VIDg2nSZMyNWtB0nfcqayO+huCPO1XgkkWk2HIbDyTMOIkcwPdKDHcibxpNxquZVg3HSPddDWtErOaIKcWghcRGhlQCN7+iAR+Dr5TlgXIutupTJZM6vPnE/decAkjfvt5rXw2NcQWOizibdwEenqufNB9o6/T5uKaflUOovha2Iw4Aadn9odQRP3CxqZujxmKcQ2Sey3K3aBJMepXPODlJUdmH1ft4px+/8AfwDi+Lyk0wAZHusVzYTsXXLiHOIJiJGttMw5pMj+V2Y4cY0eXklylYpzU2nZp7lxCh5gQNSVTsmAW7qzw9he8UxbOQ0zvy9YVf5b9Ygdbe6ljS1wOaC0ggtueYIWe0ZaZv1eD1KTixxpu5Oa8tkd2UkFVcZh8tsxPeFu1KxexrjqWgyLXIWZjRmC4seSTezqnjilox3UnDqolWDTOgKUW9F1JnPRAqFQHXXFigBNowUK3TqKsE2mUkthRaD1BcgBUOcp0PZzikVdUyUmqbp4oVk5kTSoXIgGZkJcuXLUEguHX88UJM6KVyIAGsunhq5clkwoInYJjbWXLlNjolmqrcTrDLl3mY6R6LlybGrkLJ1Ez2OnfnvudTeERqGdZloHaEibd429Vy5dLRFMYxrct9bi0+CrxdcuSoLHEAiAOX/fNOouggrlyVjIv0n3SsY+0blSuUUvkUvRmMAkna6W5upEwuXLpREdRY20gz4rnmCSLAgtj/q5cl8h8ANIt3Rf+EvPew/lSuT0LZ6jBYnPSFiCBEHoEmq6y5cvPSSkzsb0io+11DhuuXKyJCajULAuXKiehaCDh18v5RB3eoXI0BBByhzly5Cgg5kqqbrlyZCs/9k=', 
        reviews: [{ text: "Dark and thrilling.", author: "jisoo" }]
    }
];

export default function Games() {
    return (
        <div className="gamesdiv">
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to={`/games/${game.id}`} state={game}>
                            <img src={game.image} alt={game.name} style={{ width: '100px', height: 'auto' }} />
                            <p>{game.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
