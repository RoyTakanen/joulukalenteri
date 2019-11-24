nro = 0

while nro < 24:
    nro = nro + 1
    print('<div id="luukku-' + str(nro) + '-avaa" class="luukku">')
    print('  <div class="teksti">')
    print('    ' + str(nro))
    print('  </div>')
    print('</div>')

print('=================================')
print('=================================')

nro = 0

lista = "var pics = ["

while nro < 24:
    nro = nro + 1
    lista = lista + " 'kuvat/" + str(nro) + ".jpg',"

lista = lista + "];"

print(lista)
