<%*
let qcSeason = await tp.system.prompt("Season: Spring=1, Summer=2, Fall=3, Winter=4")
passedSeason = qcSeason
_%>
<%*
weatherText = tp.user.WeatherGenerator(tp, passedSeason)
_%>
<% weatherText %>
