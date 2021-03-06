export default (req, res) => {
    res.status(200).json({
        players: [
            {
                id: 0,
                name: "Jason-Kyle De Lara",
                alias: "jkbro",
                founders: true,
                joined: "April 26, 2021",
                games: ["Valorant", "Teamfight Tactics"],
                valorant_agents: ["Sage", "Sova", "Pheonix"],
                league_champs: ["Lux", "Ziggs"],
            },
            {
                id: 1,
                name: "Dale Dixon",
                alias: "Aku",
                founders: true,
                joined: "April 26, 2021",
                games: ["Valorant"],
                valorant_agents: ["Reyna", "Sova", "Brimstone"],
                league_champs: [],
            },
            {
                id: 2,
                name: "John Christian Chambers",
                alias: "StanleyBulgogi",
                founders: true,
                joined: "April 26, 2021",
                games: ["Valorant"],
                valorant_agents: ["Jett", "Killjoy", "Sage"],
                league_champs: [],
            },
            {
                id: 3,
                name: "Allan Christopher Chambers",
                alias: "Aci0ng",
                founders: true,
                joined: "April 26, 2021",
                games: ["Valorant"],
                valorant_agents: ["Jett", "Reyna", "Omen"],
                league_champs: [],
            },
            {
                id: 4,
                name: "Ben Lin",
                alias: "TianZ",
                founders: true,
                joined: "April 26, 2021",
                games: ["Valorant"],
                valorant_agents: ["Killjoy", "Pheonix", "Brimstone"],
                league_champs: [],
            },
            {
                id: 5,
                name: "Alec Chmabers",
                alias: "LunarAlecw",
                founders: false,
                joined: "April 27, 2021",
                games: ["Valorant"],
                valorant_agents: ["Sage", "Pheonix", "Brimstone"],
                league_champs: [],
            },
        ],
        established: "April 26, 2021",
        founder: "Jason-Kyle De Lara",
        cofounder: "Dale Dixon",
    });
};
