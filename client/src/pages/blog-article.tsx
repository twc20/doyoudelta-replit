import { useRoute, Link } from "wouter";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { getArticleBySlug, blogArticles } from "@shared/blog-articles";
import { SEO } from "@/components/shared/seo";

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const article = params?.slug ? getArticleBySlug(params.slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related articles (same category, exclude current)
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO 
        title={`${article.title} | Delta Tire Blog`}
        description={article.excerpt}
        keywords={article.tags.join(", ")}
        canonical={`https://deltatire.com/blog/${article.slug}`}
        ogType="article"
        ogImage="https://deltatire.com/images/delta-tire-logo.png"
        articleSchema={{
          headline: article.title,
          datePublished: new Date(article.publishedDate).toISOString(),
          dateModified: new Date(article.publishedDate).toISOString(),
          author: article.author,
          description: article.excerpt,
          image: "https://deltatire.com/images/delta-tire-logo.png",
          url: `https://deltatire.com/blog/${article.slug}`
        }}
      />
      <Header />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 text-red-600 hover:text-red-700 hover:bg-red-50">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-4">{article.category}</Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="article-title">
          {article.title}
        </h1>

        <div className="flex items-center text-gray-600 mb-8">
          <Calendar className="w-5 h-5 mr-2" />
          <time dateTime={article.publishedDate}>
            {new Date(article.publishedDate).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </time>
          <span className="mx-3">•</span>
          <span>{article.author}</span>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content ? (
            <div 
              className="article-content text-gray-800 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
              data-testid="article-content"
            />
          ) : (
            <div className="space-y-6 text-gray-800 leading-relaxed" data-testid="article-content">
              <p className="text-xl text-gray-600">{article.excerpt}</p>
              <p>This article is currently being developed. Check back soon for the full content!</p>
            </div>
          )}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Expert Automotive Service?</h3>
          <p className="mb-6 text-red-100">
            Visit Delta Tire at any of our four locations across New Mexico and Arizona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointments">
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold" data-testid="button-book-appointment">
                Book Appointment
              </Button>
            </Link>
            <Link href="/locations">
              <Button variant="outline" className="border-white text-white hover:bg-red-800" data-testid="button-view-locations">
                View Locations
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relArticle) => (
                <Link key={relArticle.id} href={`/blog/${relArticle.slug}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full cursor-pointer">
                    <Badge className="mb-3">{relArticle.category}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relArticle.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(relArticle.publishedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
