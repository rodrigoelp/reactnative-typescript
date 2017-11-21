# Infinite Scroll

So, the flat list is a pretty interesting way of dealing with elements, and as I have checked before, the flatlist in iOS (and Android) is implemented using a UICollectionView, meaning the items will be rendered as you are scrolling. This is a pretty good way to maintain the application performant as you bind to a large dataset (it does not need to render everything), but is highly inefficient downloading all the data at once.

This exercise is about listing user information as performant as possible. Fetching a small dataset and expanding it as we browse the data.

## Once downloaded, what do I need to do?

As usual, `yarn` the project... then you need to compile it (`./node_modules/.bin/tsc`) to generate the `lib/` folder. From there bob is your uncle.
