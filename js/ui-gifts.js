function renderVars(){const box=document.getElementById("varTable");box.innerHTML=[0,1,2].map(i=>`
    <div class="tier-card t${i}">
      <span class="tier-badge">★${FAVORITE_VALUES[i]} / ☆${NORMAL_VALUES[i]}</span>
      <div class="item-list">
        ${TIER_ITEMS[i].map(k=>{const st=itemState[k];return`<div class="item-row${scanWarn.has(k)?" warn":""}${st.favorite?" fav":""}">
            <img src="${ITEM_IMG[k]}" alt="${itemName(k)}">
            <span class="item-row-name">${itemName(k)}</span>
            <button class="star-btn${st.favorite?" is-fav":""}" title="${t("favoriteGift")}" onclick="setFavorite('${k}',${i},${!st.favorite})">${starSVG(st.favorite)}</button>
            <input class="inline-input item-qty" type="number" min="0" value="${st.cap}" onchange="itemState['${k}'].cap=Math.max(0,+this.value);scanWarn.delete('${k}');this.closest('.item-row').classList.remove('warn')">
          </div>`}).join("")}
      </div>
    </div>`).join("")}function togglePreset(key,on){on?selectedPresets.add(key):selectedPresets.delete(key),computeTargets(),renderTargets()}function renderPresets(){const box=document.getElementById("presetList"),rng=key=>Math.min(...PRESET_LISTS[key].filter(v=>v>0))+"–"+Math.max(...PRESET_LISTS[key]),row=(key,label)=>`
    <label class="preset-item">
      <input type="checkbox" ${selectedPresets.has(key)?"checked":""} onchange="togglePreset('${key}', this.checked)">
      <span class="pi-name">${label}</span>
      <span class="cnt">${rng(key)}</span>
    </label>`,groups=[];PRESET_ORDER.forEach(key=>{const p=presetName(key).split(" | "),name=p[0],nk=name.replace(/[\u2019\u2018`]/g,"'"),tier=p.length>1?p.slice(1).join(" | "):"",g=groups.length&&tier&&groups[groups.length-1].tier&&groups[groups.length-1].nk===nk?groups[groups.length-1]:null;g?g.keys.push([key,tier]):groups.push({name,nk,tier:!!tier,keys:[[key,tier||name]]})}),box.innerHTML=groups.map(g=>g.tier?`<div class="preset-group" role="group" aria-label="${esc(g.name)}"><div class="pg-name">${esc(g.name)}</div>${g.keys.map(([k,l])=>row(k,esc(l))).join("")}</div>`:`<div class="preset-group" role="group" aria-label="${esc(g.name)}"><div class="pg-name">${esc(g.name)}</div>${row(g.keys[0][0],esc(t("presetAllTiers")))}</div>`).join("")}
