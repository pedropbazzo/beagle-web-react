package br.com.zup.screens

import org.openqa.selenium.WebElement

interface PageViewScreen {

    val page1Text: WebElement?
    val page2Text: WebElement?
    val page3Text: WebElement?
    val pageIndicator: WebElement?


}