---
layout: post
title:  "Welcome to Jekyll Blog!"
date:   2018-10-20 22:42
categories: jekyll
---

After some thought on blogging, and a very helpful suggestion by [androidgrl][androidgrl], decided to go with Jekyll for a simple, static website, served up on my GitHub Page.

[Installation of Jekyll and bundler gems][jekyll-quickstart] on macOS:

{% highlight ruby %}
gem install bundler jekyll
{% endhighlight %}

Checked out the [Free Jekyll Themes][jekyll-themes] and selected the [Architect][jekyll-architect] free template (thanks to [pietromenna][pietromenna]!) instead of creating a site from scratch.

[Jekyll Tutorial][jekyll-tutorial], with 10 simple steps including intro to Liquid and Front Matter, was quite helpful. As a coding newb, still feel comfy with the simplicity of Jekyll even though not just HTML and CSS.

Testing was simple by [building and making available][jekyll-quickstart] on localhost:4000:
{% highlight ruby %}
bundle exec jekyll serve
{% endhighlight %}

Finally the reward of deploying to my GitHub Page:) This was done by setting up Git gracking of the local directory along with setting up a remote GitHub repo as "username.github.io" then leveraging default configuration for "master branch" as source:

![github_pages_config.png]({{ site.baseurl }}/assets/images/github_pages_config.png)

[jekyll-themes]: https://jekyllthemes.io/free
[jekyll-architect]:    https://jekyllthemes.io/theme/architect-theme
[jekyll-quickstart]: https://jekyllrb.com/docs/
[pietromenna]: https://github.com/pietromenna
[androidgrl]: https://github.com/androidgrl
[jekyll-tutorial]: https://jekyllrb.com/docs/step-by-step/01-setup/