export type TTeam = {
    name: string,
    place: number,
    players: [
        {
            kills: number,
            username: string
        },
        {
            kills: number,
            username: string
        },
        {
            kills: number,
            username: string
        }
    ],
    points: number,
    total_kills: number
}

export type TTeamsResults = {
    awayScore: number,
    awayTeam: TTeam,
    homeScore: number,
    homeTeam: TTeam,
    status: "Все статусы" | "Live" | "Finished" | "Match preparing" | "Scheduled",
    time: string,
    title: string
}
