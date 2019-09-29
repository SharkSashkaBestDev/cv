function updateSkillsPanelHeight() {
  var mainShortDescriptionHeight = document.getElementsByClassName('main-short-description')[0].clientHeight;
  var infoSubpanelHeight = document.getElementsByClassName('info-subpanel')[0].clientHeight;
  var headingHeight = 64;
  var totalHeight = document.body.clientHeight;
  var skillsHeadingHeight = document.querySelector('.skills-subpanel > .left-panel-heading').clientHeight;
  var totalTopHeight = totalHeight - (mainShortDescriptionHeight + infoSubpanelHeight + headingHeight + skillsHeadingHeight);
  var $skillsBody = document.getElementsByClassName('skills-body')[0];

  $skillsBody.style.maxHeight = totalTopHeight + 'px';
}

function updateRightPanelWidth() {
  var leftPanelWidth = document.getElementsByClassName('left-panel')[0].clientWidth;
  var $rightPanel = document.getElementsByClassName('right-panel')[0];

  $rightPanel.style.marginLeft = 'calc(' + leftPanelWidth + 'px + 1em)';
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateSkillsPanelHeight();
  updateRightPanelWidth();

  window.onresize = (event) => {
      this.updateSkillsPanelHeight();
      this.updateRightPanelWidth();
  };

  setTimeout(() => {
    this.updateSkillsPanelHeight();
    this.updateRightPanelWidth();
  }, 500);

});
