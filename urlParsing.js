function typeDefinition(urlChunks, search) {
    filter = urlChunks.includes('filter');
    index = urlChunks.includes('index.html');
    if (index) { return 'index'};
    if (filter) { return 'filter'};
    if (search) {return 'nextPage'}
    return 'project';
}

function directDefinition(urlChunks) {
    result = urlChunks.includes('website') ? 'website' : 'vnedrenie-crm';
    if (urlChunks.includes('web')) { return 'web'}
    return result;
}

function filterParamtDefinition(urlChunks, type) {
   if (type==='filter') {
       let idx = urlChunks.findIndex(rank => rank === 'filter');
       let params = urlChunks[idx + 1];
       return params;
   } else {
       return 'No Params'
   }
}

function projectDefinition(urlChunks, type) {
    if (type==='project') {
        return urlChunks[5] || 'Portfolio';
    } else {
        return 'No Project Name'
    }
 }

function updateParams() {
    let {href, search} =  window.location; 
    let  urlChunks = href.split('/');
    let type = typeDefinition(urlChunks, search),
    direct = directDefinition(urlChunks),
    filterParam = filterParamtDefinition(urlChunks, type),
    project =  projectDefinition(urlChunks, type);
    let urlParams = [type, direct, filterParam, project];
    console.log('urlParams: ', urlParams);
}

document.addEventListener("DOMContentLoaded", () => {  // Убрать, если скрипт выполняется в консоли
    updateParams();
    window.addEventListener('change',  () => {
        updateParams();
    });
  });

  updateParams(); // Убрать, если скрипт встраивается в страницу




