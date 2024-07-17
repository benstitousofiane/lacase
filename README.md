# LaCase V3.02 📓

🚧🧑‍🏭⚒️ : La version 3 est en cours de développement avec une nouvelles très belle interface et plus pratique ! La mise à jout entraîne l'ajout d'une fenêtre script pour ajouter plud tard la sauvegarde en ligne 💾
Une version en javascript seul sera déployer et refait en réact lorsque je l'aurais appris

Un magnifique notbook pour les maths ! 🔢✨

Fonctionalité Script :
- Case (couche d'abstraction) : La
- Faire un saut de ligne : br
- Texte simple : T (...) -> contenu texte
- Grand texte souligner : G (...) -> contenu titre (grand texte)
- Formule mathématiques : M (...) -> code LaTeX
- Image : I (...) -> width de l'image (...) -> lien de l'image
- Emboîter : B
- Centrer texte dans deuxième couche d'abstraction de texte : C

# Fenêtre de rendu graphique:
![lacase1](https://github.com/user-attachments/assets/b3d150ba-5a91-4096-b943-e366f42c47c8)

# Fenêtre de script :
![lacase2](https://github.com/user-attachments/assets/e1fa3008-37db-4b18-9bcc-cb9ef7b19845)


# Fenêtre de paramètre :
![lacase3](https://github.com/user-attachments/assets/9252b0a7-8fa9-44e4-bb18-24d6f40bc1c1)

Script "La" utiliser dans l'exemple, à copier collé pour l'étudier :
```La
La
G Somme de Gauss
C
br
La

T Ceci est la somme de Gauss :
M \sum_{i = 0}^{n} i = \frac{n(n+1)}{2}
B

br

La
T Il a trouver le résultat de cette somme alors qu'il était très jeune ! 🤯
br
T Voici une peinture qui montre Gauss :
I 400 https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Carl_Friedrich_Gauss.jpg/800px-Carl_Friedrich_Gauss.jpg
```


# Todo 

à faire et à corriger:
- Les paramètres
- Ajout d'élément graphiquement comme dans la V2.02
- Un tuto

# Dependances :
- KaTeX : pour convertir en format mathématique un code LaTeX
- 
Toujours rester dans l'abus 💀
