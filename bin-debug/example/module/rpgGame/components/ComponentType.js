var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by yangsong on 2017/10/19.
 */
var ComponentType = (function () {
    function ComponentType() {
    }
    ComponentType.Ai = "AiComponent";
    ComponentType.Aoi = "AoiComponent";
    ComponentType.Avatar = "AvatarComponent";
    ComponentType.AvatarSkill = "AvatarSkillComponent";
    ComponentType.Camera = "CameraComponent";
    ComponentType.Move = "MoveComponent";
    ComponentType.Control = "ControlComponent";
    ComponentType.Sort = "SortComponent";
    ComponentType.Head = "HeadComponent";
    ComponentType.AutoBattle = "AutoBattleComponent";
    ComponentType.Battle = "BattleComponent";
    return ComponentType;
}());
__reflect(ComponentType.prototype, "ComponentType");
//# sourceMappingURL=ComponentType.js.map