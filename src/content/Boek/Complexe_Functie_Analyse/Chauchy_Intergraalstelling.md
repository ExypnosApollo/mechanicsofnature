---
titel: "De integraalformule van Cauchy"
deel: "Complexe analyse"
volgorde: 1
vereist: ["Complexe getallen", "Contourintegralen"]
---

## Stelling

Laat $f$ holomorf zijn op een open gebied dat de gesloten, positief georiënteerde kromme $\gamma$ en zijn binnenste bevat. Dan geldt voor elk punt $a$ binnen $\gamma$:

$$
f(a)=\frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-a}\,dz
$$

## Bewijs

**Stap 1.** De functie $f(z)/(z-a)$ is holomorf op het gebied zonder het punt $a$. Volgens de stelling van Cauchy mag je $\gamma$ vervormen tot een kleine cirkel $C_r$ met straal $r$ rond $a$, zonder de waarde van de integraal te veranderen.

**Stap 2.** Splits de teller:

$$
\oint_{C_r}\frac{f(z)}{z-a}\,dz = f(a)\oint_{C_r}\frac{dz}{z-a} + \oint_{C_r}\frac{f(z)-f(a)}{z-a}\,dz
$$

**Stap 3.** Met $z=a+re^{i\varphi}$ geldt $dz=ire^{i\varphi}d\varphi$, dus

$$
\oint_{C_r}\frac{dz}{z-a}=\int_0^{2\pi} i\,d\varphi = 2\pi i
$$

**Stap 4.** De laatste integraal gaat naar nul. Omdat $f$ continu is in $a$, geldt $|f(z)-f(a)|\le\varepsilon(r)$ op $C_r$, met $\varepsilon(r)\to 0$ als $r\to 0$. Met de schatting lengte keer maximum:

$$
\left|\oint_{C_r}\frac{f(z)-f(a)}{z-a}\,dz\right| \le 2\pi r\cdot\frac{\varepsilon(r)}{r}=2\pi\,\varepsilon(r)\to 0
$$

De integraal is onafhankelijk van $r$, dus hij is exact nul.

**Stap 5.** Dus $\oint_\gamma \dfrac{f(z)}{z-a}dz = 2\pi i\,f(a)$. $\blacksquare$

## Opmerking

De waarde van $f$ in het binnenste ligt volledig vast door de waarden op de rand.