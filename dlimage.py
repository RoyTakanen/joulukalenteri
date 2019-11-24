# -*- coding: utf-8 -*-
import os
import glob

#Muuta toiminnot funktioiksi, joita kutsut sitten myöhemmin

def lataa():
    nro = 0

    imglist = []

    end = input("Kuinka monta kuvaa (numero): ")
    while nro < int(end):
        nro = nro + 1
        image = input(str(nro) + ". kuva: ")
        imglist.append(image)

    print("===============")
    print(" Lista kuvista")
    print(imglist)
    print("===============")

    dl = input("Lataa (k/e)")

    if dl is "k":
        print("Tehdään hakemistoa nimeltä kuvat.")
        try:
            os.system("mkdir kuvat")
        except:
            print("Hakemisto on jo olemassa.")
        os.chdir("kuvat")
        for item in imglist:
            os.system("wget " + item)
    else:
        pass

def linkit():
    try:
        imglist
        print("Muistissa olevien kuvien osoitteet ovat")
        print("===============")
        print(" Lista kuvista")
        nro = 0
        for kuva in imglist:
            nro = nro + 1
            print(str(nro) + ". " + kuva)
        print("===============")
    except:
        print("Muistissa ei ole linkkejä")

def nimi():
    monesko = int(input("Valitse aloitusnumero (luku): "))
    hakemisto = input("Hakemiston nimi: ")
    tiedostot = glob.glob(hakemisto + "/*")
    arraymonesko = 0
    for tiedosto in tiedostot:
        print("Käsitellään kuvaa " + str(monesko))
        os.system("mv " + tiedostot[arraymonesko] + " " + hakemisto + "/" + str(monesko) + ".jpg")
        print("Valmis!")
        arraymonesko = arraymonesko + 1
        monesko = monesko + 1

def pyyhi():
    print("Pyyhitään")
    os.system("clear")

def sulje():
    exit()

def apua():
    print("====================================================")
    print("komento     selitys")
    print("====================================================")
    print("pyyhi       Pyyhkii näytön")
    print("sulje       Sulkee ohjelman")
    print("lataa       Lataa kuvia url-osoitteista")
    print("linkit      Näyttää muistissa olevat kuvien linkit")
    print("====================================================")

unix =input("Onko käyttöjärjestelmä unix-pohjainen? (k/e) ")


if (unix is "k"):
    print("+-----------------------------+")
    print("|   Kaikkitietokoneista.net   |")
    print("|      kuvien lataaja         |")
    print("|    apua komento tulossa     |")
    print("+-----------------------------+")
    while True:
        komento = input("Kuvapoika: ")
        if komento == "pyyhi":
            pyyhi()
        if komento == "lataa":
            lataa()
        if komento == "linkit":
            linkit()
        if komento == "nimi":
            nimi()
        if komento == "sulje":
            sulje()
        if komento == "apua":
            apua()
        else:
            pass
else:
    print("Tämä ohjelma toimii vain unix-pohjaisilla käyttöjärjestelmillä.")
