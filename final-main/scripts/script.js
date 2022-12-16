const modalModification = new bootstrap.Modal('#modif-modal');
const modalSupp = new bootstrap.Modal('#suppression-modal');
const lutins = [];

$('form[role="search"]').submit(function (e){
    e.preventDefault();
})


/**
 * À compléter/corriger - salaire
 */
$('[type="range"]').on('change',function(e){

})

/**
 * À compléter/corriger - recherche
 */
$('[type="search"]').on('input', function (e) {

});

/**
 * À compléter/corriger - confirmation de la modification
 */
$('#modif-modal .btn-primary').click(function(e){
    modalModification.hide();
});

/**
 * À compléter/corriger - afficher la liste de lutins
 */
function afficherLutins(liste) {


    /**
     * À compléter/corriger - lorsqu'on clique sur le bouton modifier du lutin
     */
    $('[title*="Modifier"]').click(function (e) {
        const nom = $(this).attr('title').substring(9);
    })

    /**
     * À compléter/corriger - lorsqu'on clique sur le bouton supprimer du lutin
     */
    $('[title*="Supprimer"]').click(function (e) {
        const nom = $(this).attr('title').substring(10);
    })
}

/**
 * Retourne une carte Boostrap contenant les informations
 * du lutin passé en paramètre
 *
 * À compléter/corriger
 *
 * @param lutin
 * @returns {string}
 */
function getCarte(lutin) {
    return `
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading-${lutin.id}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse-${lutin.id}" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapse-${lutin.id}">
                lutin.nom
            </button>
        </h2>
        <div id="panelsStayOpen-collapse-${lutin.id}" class="accordion-collapse collapse show"
             aria-labelledby="panelsStayOpen-heading-${lutin.id}">
            <div class="accordion-body align-items-center">
                <img src="multimedia/imgs/generique.jpg" class="img-fluid rounded-circle d-block mx-auto"
                     alt="avatar" width="640" height="427">
                <ul>
                    <li>Plus grande qualité :</li>
                    <li>Poste souhaité :</li>
                    <li>Années d'expérience : ans</li>
                    <li>Salaire demandé : cadeaux/année</li>
                </ul>
                <div class="d-flex justify-content-end mt-3 mb-2">
                    <button type="button" class="btn btn-outline-secondary me-2" title="Modifier ${lutin.nom}"><i
                            class="bi bi-pencil-square me-2"></i>Modifier
                    </button>
                    <button type="button" class="btn btn-outline-danger me-2" title="Supprimer ${lutin.nom}"><i
                            class="bi bi-trash3 me-2"></i>Supprimer
                    </button>
                </div>
            </div>
        </div>
    </div>`
}
