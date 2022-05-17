<%*
let qcSeason = await  tp.system.suggester(["Spring", "Summer", "Fall", "Winter"], ["1", "2", "3", "4"]) 
passedSeason = qcSeason
_%>
<%*
weatherText = tp.user.WeatherGenerator(tp, passedSeason)
_%>
<% weatherText %>
