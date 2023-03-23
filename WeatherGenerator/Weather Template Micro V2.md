<%*
let qcSeason = await  tp.system.suggester(["Spring", "Summer", "Fall", "Winter"], ["Spring", "Summer", "Fall", "Winter"])
passedSeason = qcSeason
_%>
<%*
weatherText = tp.user.WeatherGeneratorMicroV2(tp, "Horizontal Layout", passedSeason)
_%>
<% weatherText %>
