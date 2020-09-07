<template>
    <div>
        <!-- Show background -->
        <button type="button" class="accordion" @mouseover="toggleAccordion()">{{ $t('descriptionShow')
            }}</button>
        <div class="panel">
            <div>
            <p>
                {{ $t('descIntro') }}
            </p>
            <div class="tableGrid">
                <div class="tableRow">
                    <div class="tblCell"><strong>{{ $t('gramName') }}</strong></div>
                    <div class="tblCell"><strong>N</strong></div>
                    <div class="tblCell"><strong>{{ $t('example') }}</strong></div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Mono{{ $t('gram') }}</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">A</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Bi{{ $t('gram') }}</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">AB</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Tri{{ $t('gram') }}</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">UNO</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Tetra{{ $t('gram') }}</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">{{ $t('exampleTetra') }}</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Penta{{ $t('gram') }}</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">{{ $t('examplePenta') }}</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Hexa{{ $t('gram') }}</div>
                    <div class="tblCell">6</div>
                    <div class="tblCell">{{ $t('exampleHexa') }}</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">...</div>
                    <div class="tblCell">...</div>
                    <div class="tblCell">...</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">Multi{{ $t('gram') }}</div>
                    <div class="tblCell">N</div>
                    <div class="tblCell">{{ $t('exampleMulti') }}</div>
                </div>
            </div>
            <hr>
            <p>
                {{ $t('exampleText1') }} {{ $t('exampleText2a') }} {{ $t('exampleText2b') }} {{ $t('exampleText3') }}
                <br />
                "Dieser Beispieltext führt bei einer n-Gramm-Analyse nach Histogrammen,
                Bigrammen und Trigrammen zu nachfolgendem Ergebnis,
                wenn lediglich die 20 häufigsten Treffer berücksichtigt werden."
            </p>
            <div class="tableGrid">
                <div class="tableRow">
                    <div class="tblCell"><strong>{{ $t('rank') }}</strong></div>
                    <div class="tblCell head3"><strong>Mono{{ $t('gram') }}</strong></div>
                    <div class="tblCell head3"><strong>Bi{{ $t('gram') }}</strong></div>
                    <div class="tblCell head3"><strong>Tri{{ $t('gram') }}</strong></div>
                </div>
            </div>
            <div class="tableGrid">
                <div class="tableRow">
                    <div class="tblCell">1</div>
                    <div class="tblCell">E</div>
                    <div class="tblCell">25</div>
                    <div class="tblCell">16.13%</div>
                    <div class="tblCell">EN</div>
                    <div class="tblCell">8</div>
                    <div class="tblCell">5.16%</div>
                    <div class="tblCell">RAM</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">2</div>
                    <div class="tblCell">I</div>
                    <div class="tblCell">15</div>
                    <div class="tblCell">9.68%</div>
                    <div class="tblCell">ER</div>
                    <div class="tblCell">6</div>
                    <div class="tblCell">3.87%</div>
                    <div class="tblCell">AMM</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">3</div>
                    <div class="tblCell">N</div>
                    <div class="tblCell">15</div>
                    <div class="tblCell">9.68%</div>
                    <div class="tblCell">IG</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">3.23%</div>
                    <div class="tblCell">GRA</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">4</div>
                    <div class="tblCell">R</div>
                    <div class="tblCell">13</div>
                    <div class="tblCell">8.39%</div>
                    <div class="tblCell">RA</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">MEN</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">5</div>
                    <div class="tblCell">T</div>
                    <div class="tblCell">9</div>
                    <div class="tblCell">5.81%</div>
                    <div class="tblCell">IE</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">MME</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">6</div>
                    <div class="tblCell">G</div>
                    <div class="tblCell">9</div>
                    <div class="tblCell">5.81%</div>
                    <div class="tblCell">CH</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">RBE</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">7</div>
                    <div class="tblCell">M</div>
                    <div class="tblCell">9</div>
                    <div class="tblCell">5.81%</div>
                    <div class="tblCell">MM</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">ERB</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">8</div>
                    <div class="tblCell">A</div>
                    <div class="tblCell">8</div>
                    <div class="tblCell">5.16%</div>
                    <div class="tblCell">GR</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">ICH</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">9</div>
                    <div class="tblCell">S</div>
                    <div class="tblCell">7</div>
                    <div class="tblCell">4.52%</div>
                    <div class="tblCell">ME</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">ACH</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">10</div>
                    <div class="tblCell">H</div>
                    <div class="tblCell">7</div>
                    <div class="tblCell">4.52%</div>
                    <div class="tblCell">AM</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">2.58%</div>
                    <div class="tblCell">NAC</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">11</div>
                    <div class="tblCell">D</div>
                    <div class="tblCell">6</div>
                    <div class="tblCell">3.87%</div>
                    <div class="tblCell">EI</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">DIE</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">12</div>
                    <div class="tblCell">L</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">3.23%</div>
                    <div class="tblCell">DI</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">IGR</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">13</div>
                    <div class="tblCell">B</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">3.23%</div>
                    <div class="tblCell">NA</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">BEI</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">14</div>
                    <div class="tblCell">F</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">3.23%</div>
                    <div class="tblCell">BE</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">NNL</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">15</div>
                    <div class="tblCell">C</div>
                    <div class="tblCell">5</div>
                    <div class="tblCell">3.23%</div>
                    <div class="tblCell">IS</div>
                    <div class="tblCell">3</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">NTR</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">16</div>
                    <div class="tblCell">U</div>
                    <div class="tblCell">4</div>
                    <div class="tblCell">1.94%</div>
                    <div class="tblCell">SE</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">NLE</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">17</div>
                    <div class="tblCell">W</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">ND</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">NGR</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">18</div>
                    <div class="tblCell">O</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">AC</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">NIS</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">19</div>
                    <div class="tblCell">Z</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                    <div class="tblCell">IC</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">NUN</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
                <div class="tableRow">
                    <div class="tblCell">20</div>
                    <div class="tblCell">Y</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                    <div class="tblCell">RB</div>
                    <div class="tblCell">2</div>
                    <div class="tblCell">1.29%</div>
                    <div class="tblCell">NZU</div>
                    <div class="tblCell">1</div>
                    <div class="tblCell">0.65%</div>
                </div>
            </div>
            </div>
            <hr>
            <h4>Weblinks</h4>
            <p>
                <a target="_blank" :href="$t('weblink')">{{ $t('weblink') }}</a>
            </p>
            <hr>
        </div>

    </div>
</template>
<style src="./accordion.css"></style>
<style src="../style/table.grid.css"></style>
<script src="./accordion.js"></script>
