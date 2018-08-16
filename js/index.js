var data = {
    walls: [ 'red','cream','grey' ],
    images: [{
        url: 'images/100-is-easier-than-98.jpg',
        quotes: [{
            text: 'If you give in to “just this once,” based on a marginal-cost analysis, you’ll regret where you end up. The boundary — your personal moral line — is powerful because you don’t cross it. Decide what you stand for. And then stand for it all the time.',
            author: 'Clayton Christensen, Harvard Business Professor'
        }]
    },{
        url: 'images/behaviour-drives-motivation.jpg',
        quotes: [{
            text: 'You’re more likely to act yourself into feeling, than feeling yourself into action.',
            author: 'Jerome Bruner, Harvard psychologist'
        }]
    },{
        url: 'images/behaviour-shapes-personality.jpg',
        quotes: [{
            text: 'Personality is an environmental adaptation. In many ways, personality is the product of previous trauma. Once that suppressed trauma is healed, the personality will change.',
            author: 'Dr. Gabor Maté'
        }]
    },{
        url: 'images/better-prolific-than-perfect.jpg',
        quotes: [{
            text: 'Done is better than perfect.',
            author: 'Joe Polish'
        }]
    },{
        url: 'images/creativity-banishes-recurring-thoughts.jpg',
        quotes: [{
            text: 'The average person has between 12,000 and 60,000 thoughts per day. Of those, 80% are negative and 95% are exactly the same repetitive thoughts as the day before. Recurring thoughts are not a good thing. Recurring thoughts reflect unfinished projects, unresolved inner conflicts, or needed conversations.',
            author: 'National Science Foundation, 2005'
        }]
    },{
        url: 'images/do-what-is-right-let-the-consequences-follow.jpg',
        quotes: [{
            text: 'We control our actions, but the consequences that flow from those actions are controlled by principles.',
            author: 'Dr. Stephen R. Covey'
        }]
    },{
        url: 'images/expect-anything-attach-to-nothing.jpg',
        quotes: [{
            text: 'The only way to truly experience the highest levels of transformation and “conscious evolution” is to detach from the need for specific outcomes.',
            author: 'Robert Kegan, Harvard Psychologist'
        }]
    },{
        url: 'images/nothing-happens-until-after-ships-are-burned.jpg',
        quotes: [{
            text: 'Once we had all of our money in the same inventory it was all or nothing. That really scared me, just knowing that it was like do or die. I had to sell the shoes. You couldn’t turn back, you couldn’t just get rid of them and get cash back, you had to go forward.',
            author: 'a 17 year old kid who wanted to sell shoes'
        }]
    },{
        url: 'images/success-precedes-confidence.jpg',
        quotes: [{
            text: 'Every next level of your life will require a different you.',
            author: 'Leonardo Dicaprio'
        },{
            text: 'What got you here won’t get you there.',
            author: 'Marshall Goldsmith'
        }]
    },{
        url: 'images/the-more-you-invest-the-bigger-the-psychological-upgrade.jpg',
        quotes: [{
            text: 'The unconscious will allow us to have only what we believe we deserve. If we have a small view of ourselves, then what we deserve is poverty. And our unconscious will see to it that we have that actuality.',
            author: 'Dr. David Hawkins'
        }]
    },{
        url: 'images/truth-is-relational.jpg',
        quotes: [{
            text: 'When we try to pick out anything by itself, we find it hitched to everything else in the universe.',
            author: 'John Muir'
        },{
            text: 'Social psychologists argue that who we are at any one time depends mostly on the context in which we find ourselves. But who creates the context? The more mindful we are, the more we can create the contexts we are in. Mindfulness lets us see things in a new light and believe in the possibility of change.',
            author: 'Ellen Langer'
        }]
    },{
        url: 'images/we-tap-into-a-vast-ocean-of-abundance.jpg',
        quotes: [{
            text: 'Giving as you get acknowledges the Universe as truly abundant. Giving taps into the spiritual dimension that multiplies us, our thinking, and our results. The Enlightened Millionaire knows this: There is an ocean of abundance and one can tap into it with a teaspoon, a bucket, or a tractor trailer. The ocean doesn’t care.',
            author: 'The One Minute Millionaire'
        }]
    },{
        url: 'images/when-you-make-a-decision-the-universe-conspires-to-make-it-happen.jpg',
        quotes: [{
            text: 'Whatever the mind can conceive and believe, it can achieve.',
            author: 'Napoleon Hill'
        }]
    },{
        url: 'images/write-it-down-watch-it-happen.jpg',
        quotes: [{
            text: 'Writing organizes and clarifies our thoughts. Writing is how we think our way into a subject and make it our own. Writing enables us to find out what we know — and what we don’t know — about whatever we’re trying to learn.',
            author: 'William Zinsser'
        }]
    },{
        url: 'images/you-make-or-break-your-life-before-8am.jpg',
        quotes: [{
            text: 'Lose an hour in the morning, and you will spend all day looking for it.',
            author: 'Richard Whately'
        }]
    }]
};

var gallery = {
    render: function(data) {
        var wallClassName = data.walls[Math.floor( Math.random() * data.walls.length)],
            image = data.images[Math.floor( Math.random() * data.images.length)],
            quote = image.quotes[Math.floor( Math.random() * image.quotes.length)];

        document.getElementsByTagName('html')[0].className = wallClassName;
        document.getElementsByTagName('img')[0].setAttribute('src', image.url);
        document.getElementsByTagName('blockquote')[0].innerHTML = quote.text + '<cite>' + quote.author + '</cite>';
    }
};
gallery.render(data);